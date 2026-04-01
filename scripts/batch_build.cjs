/**
 * 用于分批构建
 * 
 * ## 注意
 * 强烈不建议在本地运行，否则你最好需要确保你已经备份了
 * 因为在分批构建的过程该程序会暂时移动你的文档出入临时文件夹
 * 
 * ## 设计要点
 * - 构建前先把 src 里所有内容（除了 .vuepress）移到 src_tmp 进行总备份
 * - 每次批次，从 src_tmp 还原本批所需文件/文件夹到 src，进行构建，后立即移回 src_tmp
 * - 每一批循环都保证 src 除 .vuepress 外只有这批内容，且每次都清空 dist 临时副本再合并
 * - dist_tmp 下合并所有批的产物，最后同步到正式 dist
 * 
 * ## 旧版本
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
    console.log('分批 debug', fileBatch.length ? [...dirBatches, fileBatch] : dirBatches)
    return fileBatch.length ? [...dirBatches, fileBatch] : dirBatches;
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
 * 将文件/目录从一个目录“批量移动”到另一个目录
 * @param {string[]} batch 文件名/目录名数组
 * @param {string} from    源目录
 * @param {string} to      目标目录
 */
async function moveBatch(batch, from, to) {
  for (const name of batch) {
    const srcPath = path.join(from, name);
    const destPath = path.join(to, name);
    await fs.move(srcPath, destPath, { overwrite: true });
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

  // 1. 预备阶段
  // 清空临时区 (排队区和结束编译区)
  await fs.emptyDir(distDir_after);
  await fs.emptyDir(srcDir_before);
  // 编译区移动到排队区
  const srcEntries = await fs.readdir(srcDir);
  for (const entry of srcEntries) {
    if (entry !== '.vuepress') {
      const srcPath = path.join(srcDir, entry);
      const destPath = path.join(srcDir_before, entry);
      await fs.move(srcPath, destPath, { overwrite: true });
    }
  }

  // 2. 循环分批
  for (let i = 0; i < batches.length; ++i) {
    const batch = batches[i];
    console.log(`------ [分批 ${i + 1}: ${batch.join(', ')}] ------`);

    // 2.1 本批从 src_tmp 还原到 src
    await moveBatch(batch, srcDir_before, srcDir);

    // 2.2 运行构建命令
    console.log(`[RUN] pnpm run docs:build`);
    child_process.execSync('pnpm run docs:build', {
      stdio: 'inherit',
      cwd: rootDir
    });

    // 2.3 合并产物（只拷目标，不覆盖旧文件）
    await fs.copy(distDir, distDir_after, { overwrite: false, errorOnExist: false });
    console.log(`[INFO] 批次${i + 1} 产物已合并`);

    // 2.4 编译文件移回 src_tmp
    await moveBatch(batch, srcDir, srcDir_before);
  }

  // 4. 还原 src 区
  const left = await fs.readdir(srcTmpDir);
  for (const entry of left) {
    const srcPath = path.join(srcTmpDir, entry);
    const destPath = path.join(srcDir, entry);
    await fs.move(srcPath, destPath, { overwrite: true });
  }
  console.log('[INFO] src_tmp 临时内容已全部还原，src 内容恢复完成。');

  // 4. 还原最终产物
  await fs.emptyDir(distDir);
  await fs.copy(distDir_after, distDir);
  console.log('\n[INFO] 分批构建已全部完成。最终 dist 内容：');
  console.log(await fs.readdir(distDir));
}
main().catch(e => {
  console.error('[ERROR]', e);
  process.exit(1);
});
