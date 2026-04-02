/**
 * 提前生成静态的侧边栏和导航栏结构
 * 
 * 应用场景:
 * 
 * - 代替自定义的 "structure"，可以更方便地自定义一些东西
 * - 可配合进行分批构建
 * 
 * 不足：
 * 
 * - TODO 未支持  order 等侧边栏数据
 * - 上层未支持是否跨域批次的判定，跨批次跳转不能走 SPA
 */

const fs = require('fs-extra'); // fs 的优化版本
const path = require('path');
const glob = require('glob');

const rootDir = process.cwd(); // 执行脚本路径，即该文件的 `../`
const srcDir = path.join(rootDir, 'src');

/**
 * 递归生成 sidebar 的 children 数组
 * 
 * TODO 不支持 order 等侧边栏特性
 * @param {string} dir - 绝对路径（递归）
 * @param {string} baseRoute - 路由前缀（如 '/'、'/foo/', '/foo/bar/'）
 * @returns {Promise<SidebarItemOptions[]>}
 */
async function generate_sidebar_recursion(dir, baseRoute) {
  const entries = (await fs.readdir(dir)).sort((a, b) => a.localeCompare(b, 'zh-hans'));
  const children = [];

  for (const entry of entries) {
    if (entry === '.vuepress') continue;
    const absPath = path.join(dir, entry);
    const stat = await fs.stat(absPath);

    // 文件夹
    if (stat.isDirectory()) {
      const childChildren = await generate_sidebar_recursion(absPath, baseRoute + entry + '/'); // 递归子目录
      // 查找有没有 README.md
      let readmeLink = undefined;
      if (await fs.pathExists(path.join(absPath, 'README.md'))) {
        readmeLink = baseRoute + entry + '/README.md';
      }
      children.push({
        text: entry,
        prefix: entry + '/',
        link: readmeLink,
        collapsible: true,
        expanded: false,
        children: childChildren
      });
    }
    // 文件
    else if (entry.endsWith('.md')) {
      children.push({
        text: entry.replace(/\.md$/, ''),
        link: baseRoute + entry
      });
    }
  }

  return children;
}

/**
 * 生成递归原结构 sidebar
 * @returns {Promise<SidebarOptions>}
 */
async function generate_sidebar() {
  const children = await generate_sidebar_recursion(srcDir, '/');
  return { '/': children };
}

/**
 * 生成 navbar 数据
 * `/` 加所有一级目录
 * @returns {Promise<NavbarOptions>} 详见 vuepress 文档
 */
async function generate_navbar() {
  const entries = await fs.readdir(srcDir);
  const navbar = [];

  // 所有一级目录
  for (const dir of entries) {
    if (dir === '.vuepress') continue;
    const absDir = path.join(srcDir, dir);
    const stat = await fs.stat(absDir);

    if (stat.isDirectory()) {
      // 若有 README.md 优先跳转
      const readmePath = path.join(absDir, 'README.md');
      navbar.push({
        text: dir,
        link: fs.existsSync(readmePath) ? `/${dir}/README.md` : `/${dir}/`,
      });
    }
  }

  // ROOT
  // if (entries.some((name) => name === 'README.md')) {
  navbar.unshift({
    text: '/',
    link: '/',
  });
  // }

  return navbar;
}

/**
 * 写 sidebar/navbar 数据文件到 .vuepress/config/batch.auto.js
 * 使分批过程中始终统一引用
 */
async function write_sidebar_navbar_config(sidebar, navbar) {
  const vuepress_config_dir = path.join(srcDir, '.vuepress', 'config');
  await fs.ensureDir(vuepress_config_dir);
  const outFile = path.join(vuepress_config_dir, 'batch.auto.js');
  const content =
    `// 自动生成 sidebar/navbar 配置，分批构建前生成\n` +
    // `module.exports = {\n` +
    `export default {\n` +
    `  sidebar: ${JSON.stringify(sidebar)},\n` +
    `  navbar: ${JSON.stringify(navbar)},\n` +
    `};\n`;
  await fs.writeFile(outFile, content, 'utf8');
}

async function main() {
  const sidebarData = await generate_sidebar();
  const navbarData = await generate_navbar();
  await write_sidebar_navbar_config(sidebarData, navbarData);
}
main().catch(e => {
  console.error('[ERROR]', e);
  process.exit(1);
});
