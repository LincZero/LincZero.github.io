import type {BioChainMapItem, LocalMapItem, MapNodeLink, Page, QueueItem, titleGetter,} from "../types/index.js";
import {fs, path} from "vuepress/utils";
import {App} from "vuepress/core";
import {options} from "./index.js";
import {graphDataName} from "../client/useGlobalGraph.js";

export const bioChainMap: Record<string, BioChainMapItem> = {};
let max_deep = 5;

function generateLocalMap(root: string): MapNodeLink {
    max_deep = options.localGraphDeep || 5;

    const localMap: Record<string, LocalMapItem> = {};
    const queue: QueueItem[] = [
        {
            path: root,
            depth: 0,
        },
    ];
    const visited = new Set<string>();

    while (queue.length > 0) {
        const {path, depth} = queue.shift()!;

        if (depth > max_deep || visited.has(path)) {
            continue;
        }

        visited.add(path);
        localMap[path] = {
            title: bioChainMap[path].title,
            path: path,
            outlink: [],
            backlink: [],
        };

        const outlinks = bioChainMap[path].outlink;
        const backlinks = bioChainMap[path].backlink;

        outlinks.forEach((link) => {
            if (!visited.has(link) && depth + 1 <= max_deep) {
                queue.push({
                    path: link,
                    depth: depth + 1,
                });
                localMap[path].outlink.push(link);
            }
        });

        backlinks.forEach((link) => {
            if (!visited.has(link) && depth + 1 <= max_deep) {
                queue.push({
                    path: link,
                    depth: depth + 1,
                });
                localMap[path].backlink.push(link);
            }
        });
    }
    // 转成node-link的格式
    const localMapNodeLink: MapNodeLink = {
        nodes: [],
        links: [],
    };
    for (const key of Object.keys(localMap)) {
        localMapNodeLink.nodes.push({
            id: key,
            value: {
                ...localMap[key],
            },
        });
        localMap[key].outlink.forEach((link) => {
            localMapNodeLink.links.push({
                source: key,
                target: link,
            });
        });
        localMap[key].backlink.forEach((link) => {
            localMapNodeLink.links.push({
                source: link,
                target: key,
            });
        });
    }
    return localMapNodeLink;
}

function buildGlobalMap(): MapNodeLink {
    const graph: MapNodeLink = {
        nodes: [],
        links: [],
    };

    // 遍历所有页面添加节点
    for (const path of Object.keys(bioChainMap)) {
        graph.nodes.push({
            id: path,
            value: {
                title: bioChainMap[path].title,
                path: path,
                outlink: bioChainMap[path].outlink,
                backlink: bioChainMap[path].backlink,
            },
        });
        bioChainMap[path].backlink.forEach((link) => {
            graph.links.push({
                source: link,
                target: path,
            });
        });
        bioChainMap[path].outlink.forEach((link) => {
            graph.links.push({
                source: path,
                target: link,
            });
        });
    }

    return graph;
}

function write_to_frontmatter(page: Page): void {
    // 第三次遍历 写入到页面中
    // @ts-ignore
    const bioChain = bioChainMap[page.data.filePathRelative];

    if (!bioChain) {
        return;
    }
    //去个重
    bioChain.outlink = [...new Set(bioChain.outlink)];
    bioChain.backlink = [...new Set(bioChain.backlink)];

    const outlink_array = JSON.parse(JSON.stringify(bioChain.outlink));
    const backlink_array = JSON.parse(JSON.stringify(bioChain.backlink));

    const outlink_result = [];
    for (let i = 0; i < outlink_array.length; i++) {
        let link = outlink_array[i];
        if (link.endsWith(".md")) {
            link = link.replace(/\.md$/, ".html");
        }
        outlink_result.push({
            title: bioChainMap[outlink_array[i]].title,
            link: link,
        });
    }

    const backlink_result = [];
    for (let i = 0; i < backlink_array.length; i++) {
        let link = backlink_array[i];
        if (link.endsWith(".md")) {
            link = link.replace(/\.md$/, ".html");
        }
        backlink_result.push({
            title: bioChainMap[backlink_array[i]].title,
            link: link,
        });
    }
    const localMap = generateLocalMap(page.filePathRelative);
    page.data.bioChainData = {
        outlink: outlink_result,
        backlink: backlink_result,
        localMap: localMap,
    };
}

export function buildBioChainMap(pages: Page[], titleGetter: titleGetter = (page) => {
    if (!page.title || page.title.trim() === "") {
        return page.filePathRelative
    }
    return page.title;
}): void {
    // 生成双链
    for (const page of pages) {
        if (!page.filePathRelative) {
            continue;
        }
        bioChainMap[page.filePathRelative] = {
            title: titleGetter(page),
            outlink: [],
            backlink: [],
        };
    }
    // 第二次遍历，判断出链
    for (const page of pages) {
        const links: string[] = [];
        for (const link of page.links) {
            links.push(decodeURIComponent(link.relative));
        }
        links.forEach((link) => {
            if (bioChainMap[link]) {
                bioChainMap[link].backlink.push(page.filePathRelative);
                bioChainMap[page.filePathRelative].outlink.push(link);
            }
        });
    }

    for (const page of pages) {
        write_to_frontmatter(page);
    }
}

export async function writeGlobalGraph(app: App): Promise<void> {
    const globalMap = buildGlobalMap();
    const location = app.dir.dest(graphDataName);
    await fs.ensureDir(path.dirname(location));
    await fs.writeFile(location, JSON.stringify(globalMap), "utf-8");
}

export function writeTempGlobalGraph(app: App): string {
    const globalMap = buildGlobalMap();
    const location = app.dir.temp(graphDataName);
    fs.ensureDirSync(path.dirname(location));
    fs.writeFileSync(location, JSON.stringify(globalMap), "utf-8");

// 计算出路径 后面导入用
    const projectRoot = app.dir.source();

    return path.relative(projectRoot, location);
}
