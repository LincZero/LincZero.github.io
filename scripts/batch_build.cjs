/**
 * 用于分批构建
 * 
 * ## 旧版本
 * 
 * 修改于 LincDocs Workflow 原 github workflows ci yml file
 * 相较于旧的工作流版本:
 * - 可在本地环境运行
 * - 代码逻辑更易读、易维护、易扩展
 * - 参数和变量使用方便
 */

// 暂使用硬编码
// TODO 后续从 theme/config 配置中获取
// 默认会将第一层全视为分层的块
const paths = []

const fs = require('fs-extra'); // fs 的优化版本
const path = require('path');
const child_process = require('child_process');

// 四个主要路径，根据序号顺序进行变换
const rootDir = process.cwd();
const srcTmpDir = path.join(rootDir, 'src_tmp'); // (1) 排队中待编译的内容
const srcDir = path.join(rootDir, 'src'); // (2) 准备编译的内容
const distDir = path.join(srcDir, '.vuepress', 'dist'); // (3) 当前编译好的内容
const distTmpDir = path.join(rootDir, 'dist_tmp'); // (4) 已编译好的内容


function run(command, opts = {}) {
  console.log(`[RUN] ${command}`);
  child_process.execSync(command, { stdio: 'inherit', ...opts });
}

// 获取批次目录。若 providedBatches 为空，返回所有一级文件夹（除了 .vuepress）。
async function getBatches(providedBatches) {
  const entries = await fs.readdir(srcDir);

  // 过滤 .vuepress
  const candidates = entries.filter(name =>
    name !== '.vuepress' &&
    fs.statSync(path.join(srcDir, name)).isDirectory()
  );

  if (!providedBatches.length) {
    // 每个一级目录单独为一批
    return candidates.map(name => [name]);
  }
  // 否则：指定目录分别为批次，其余合为一批
  const batchSet = new Set(providedBatches);
  const remain = entries.filter(
    name =>
      name !== '.vuepress' &&
      !batchSet.has(name)
  );
  // remain 可含普通文件和未被包括的目录
  const remainBatch = remain.length ? [remain] : [];
  // 返回每个指定目录为一批 + 剩余为一批
  return [...providedBatches.map(name => [name]), ...remainBatch];
}

async function moveBatch(batch, from, to) {
  for (const name of batch) {
    const srcPath = path.join(from, name);
    const destPath = path.join(to, name);
    await fs.move(srcPath, destPath, { overwrite: true });
  }
}

async function restoreBatch(batch, from, to) {
  for (const name of batch) {
    const srcPath = path.join(from, name);
    const destPath = path.join(to, name);
    await fs.move(srcPath, destPath, { overwrite: true });
  }
}

async function removeOthers(batch) {
  // 只保留 batch 的内容和 .vuepress，其余全部删除
  const entries = await fs.readdir(srcDir);
  for (const entry of entries) {
    if (entry === '.vuepress') continue;
    if (!batch.includes(entry)) {
      await fs.remove(path.join(srcDir, entry));
    }
  }
}

async function main() {
  // 批次配置：命令行参数 node patch_build.cjs dir1 dir2...
  // 若无参数即全量自动分批
  const userBatches = process.argv.slice(2);

  await fs.emptyDir(distTmpDir);
  await fs.emptyDir(srcTmpDir);

  // 得到批次，每个批次是文件名数组
  const batches = await getBatches(userBatches);

  console.log(`[INFO] 将按${batches.length}个批次构建：`, batches.map(b => b.join(',')).join(' | '));

  for (let i = 0; i < batches.length; ++i) {
    const batch = batches[i];
    console.log(`------ [分批 ${i + 1}: ${batch.join(', ')}] ------`);

    // 1. 备份当前 batch，移动到 src/
    await moveBatch(batch, srcDir, srcTmpDir);

    // 清除多余，确保src/只有 .vuepress 和 batch 内容
    await removeOthers(batch);

    // 编译
    run('pnpm run docs:build', { cwd: rootDir });

    // 合并产物
    await fs.copy(distDir, distTmpDir, { overwrite: false, errorOnExist: false });
    console.log(`[INFO] 批次${i + 1}产物合并完毕`);

    // 还原 batch
    await restoreBatch(batch, srcTmpDir, srcDir);
  }

  // 还原最终产物
  await fs.emptyDir(distDir);
  await fs.copy(distTmpDir, distDir);
  console.log('\n[INFO] 分批构建已全部完成。最终 dist 内容：');
  console.log(await fs.readdir(distDir));
}

main().catch(e => {
  console.error('[ERROR]', e);
  process.exit(1);
});
