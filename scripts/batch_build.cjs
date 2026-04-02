/**
 * 用于分批构建
 * 
 * ## 注意
 * 
 * - 强烈不建议在本地运行，否则你最好需要确保你已经备份了
 *   因为在分批构建的过程该程序会暂时移动你的文档出入临时文件夹
 * - 分批构建中的第一批是最重要的 (README.md 首页的编译一般要在第一批)
 *   原因见 [脚本缺点/不足](#脚本缺点/不足)
 * 
 * ## 脚本缺点/不足
 * 
 * 如果存在一些不可分批合并的资源，会以第一批优先进行保留。即分批合并过程并不完美。这会导致:
 * 
 * - 默认侧边栏无法同时显示多批次的资源
 *   (TODO 通过配置来完成，分批构建之前先把目录给弄好并保存，再分批构建)
 * - 两个批次编译出来的资源无法做到 SPA 跳转，必须以 url 链接形式跳转
 *   (一般情况下使用 navbar + 绝对链接进行配置)
 * 
 * ## 分批合并冲突点说明
 * 
 * 如果分批构建中的非同名文件/文件夹，是能完美合并的。无法完美合并的主要是那些同名资源
 * 
 * - 可完美合并
 *   - assets 的大部分资源
 *   - 主文档页
 *   - ...
 * - 只保留，但不影响 (大家的文件一样)
 *   - assets 的共用资源 (icon image 等)
 *   - public 中的资源
 *   - 404页和图标、logo和favicon图标、...
 *   - ...
 * - **只保留，且影响**
 *   - 有希望完美合并
 *     - category/index.html
 *     - star/index.html
 *     - tag/index.html
 *     - timeline/index.html
 *     - sitemap.xml
 *     - sitemap.xsl
 *   - 博客页路径名的文件夹
 * - 其他 - 插件
 *   - 如 globalRelationalGraph.json
 * 
 * ## 设计要点 (For Developer)
 * 
 * - 构建前先把 src 里所有内容（除了 .vuepress）移到 src_tmp 进行总备份
 * - 每次批次，从 src_tmp 还原本批所需文件/文件夹到 src，进行构建，后立即移回 src_tmp
 * - 每一批循环都保证 src 除 .vuepress 外只有这批内容，且每次都清空 dist 临时副本再合并
 * - dist_tmp 下合并所有批的产物，最后同步到正式 dist
 * 
 * ## 旧版本 (For Developer)
 * 
 * 修改于 LincDocs Workflow 原 github workflows ci yml file
 * 相较于旧的工作流版本:
 * - 可在本地环境运行
 * - 代码逻辑更易读、易维护、易扩展
 * - 参数和变量使用方便
 */

const fs = require('fs-extra'); // fs 的优化版本
const path = require('path');
const child_process = require('child_process');

// 四个主要路径，根据序号顺序进行变换
const rootDir = process.cwd(); // 执行脚本路径，即该文件的 `../`
const srcDir_before = path.join(rootDir, 'src_tmp'); // (1) 排队中待编译的内容
const srcDir = path.join(rootDir, 'src'); // (2) 准备编译的内容
const distDir = path.join(srcDir, '.vuepress', 'dist'); // (3) 当前编译好的内容
const distDir_after = path.join(rootDir, 'dist_tmp'); // (4) 已编译好的内容
const distDir_debug = path.join(rootDir, 'dist_debug'); // 仅开发调试查看中间产物时使用

/**
 * 获取分批列表
 *   - 自动分批：每个一级目录为一批，所有一级文件合为一批（如存在）
 *   - 手动指定参数：每个参数为一批，其余未被指定的全并一批（如存在）
 *   - 都仅限 src 下直系（即不递归多级）
 * 
 * @param {string[]} providedBatches 指定批次（命令行参数）
 * @returns {Promise<string[][]>} 每个批次是一个字符串数组（文件/文件夹数组）
 */
async function getBatches(providedBatches) {
  const entries = await fs.readdir(srcDir);

  // 过滤 .vuepress
  const candidates = entries.filter(name => name !== '.vuepress');

  // 自动分批
  if (!providedBatches.length) {
    const dirBatches = [];
    const fileBatch = [];
    for (const name of candidates) {
      const stat = fs.statSync(path.join(srcDir, name));
      if (stat.isDirectory()) {
        dirBatches.push([name]);
      } else {
        fileBatch.push(name);
      }
    }
    return fileBatch.length ? [fileBatch, ...dirBatches] : dirBatches; // 要零散文件优先
  }
  // 手动分批
  else {
    const batchSet = new Set(providedBatches);
    const remain = candidates.filter(name => !batchSet.has(name));
    // remain 可含普通文件和未被包括的目录
    const remainBatch = remain.length ? [remain] : [];
    return [...providedBatches.map(name => [name]), ...remainBatch];
  }
}

/**
 * 批量移动指定的文件列表
 * .vuepress 文件例外
 * @param {string[]} batch 文件名/目录名数组
 * @param {string} from    源目录
 * @param {string} to      目标目录
 */
async function moveBatch(batch, from, to) {
  for (const name of batch) {
    if (name === '.vuepress') continue
    const srcPath = path.join(from, name);
    const destPath = path.join(to, name);
    await fs.move(srcPath, destPath, { overwrite: true }); // 可覆盖
  }
}

/**
 * 主执行流程：
 * - 获取批次
 * - 对每个批次：移动文件、保留必要内容、构建、合并产物、还原
 * - 最后合并所有产物至 dist
 */
async function main() {
  // 批次配置：命令行参数 node patch_build.cjs dir1 dir2...
  // 若无参数即全量自动分批
  const userBatches = process.argv.slice(2);
  // 得到批次，每个批次是文件夹名数组
  const batches = await getBatches(userBatches);
  console.log(`[INFO] 将按${batches.length}个批次构建：`, batches.map(b => b.join(',')).join(' | '));

  // 1.1. 预备 - src 和 src_tmp
  // await fs.emptyDir(srcDir_before); // 取消，风险 (如果中途失败了，又重新运行，会丢失)
  const src_entries = await fs.readdir(srcDir);
  await moveBatch(src_entries, srcDir, srcDir_before);
  console.log(`[INFO] [src 和 src_tmp] 向临时源码加入 ${src_entries.length} 个文件/文件夹`, src_entries)

  // 2. 循环分批
  await fs.emptyDir(distDir_after);
  await fs.emptyDir(distDir_debug);
  for (let i = 0; i < batches.length; ++i) {
    const batch = batches[i];
    console.log(`------ [分批 ${i + 1}: ${batch.join(', ')}] ------`);

    // 2.1 从 src_tmp 取出本批
    await moveBatch(batch, srcDir_before, srcDir);

    // 2.2 运行构建命令
    console.log(`[INFO] [RUN] pnpm run docs:build`);
    child_process.execSync('pnpm run docs:build', {
      stdio: 'inherit',
      cwd: rootDir
    });

    // // 仅用于临时调试 - 观察合并动作
    // await fs.copy(distDir, path.join(distDir_debug, i.toString()), { overwrite: false, errorOnExist: false });

    // 2.3 合并产物（只拷目标，不覆盖旧文件。复制行为默认是不覆盖合并，移动行为默认覆盖）
    await fs.copy(distDir, distDir_after, { overwrite: false, errorOnExist: false });
    console.log(`[INFO] 批次${i + 1} 产物已合并`);

    // 2.4 向 src_tmp 放回本批
    await moveBatch(batch, srcDir, srcDir_before);
  }

  // 1.2. 还原 - src 和 src_tmp
  const src_tmp_entries = await fs.readdir(srcDir_before);
  await moveBatch(src_tmp_entries, srcDir_before, srcDir);
  console.log(`[INFO] [src 和 src_tmp] 从临时源码恢复 ${src_entries.length} 个文件/文件夹`, src_tmp_entries)

  // 4. 还原最终产物
  await fs.emptyDir(distDir);
  await fs.move(distDir_after, distDir, { overwrite: true });
  console.log('\n[INFO] 分批构建已全部完成。最终 dist 内容：');
  console.log(await fs.readdir(distDir));
}
main().catch(e => {
  console.error('[ERROR]', e);
  process.exit(1);
});
