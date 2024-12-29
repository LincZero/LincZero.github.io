import type * as vp from 'vuepress';

export interface BioChainData {
    outlink: LinkItem[];
    backlink: LinkItem[];
    localMap: MapNodeLink;
}

export interface LinkItem {
    title: string;
    link: string;
}

export interface MapNodeLink {
    nodes: Node[];
    links: Link[];
}

export interface Node {
    id: string;
    value: NodeValue;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    index?: number;
    isIsolated?: boolean;
    isCurrent?: boolean;
    isVirtual?: boolean;
}

export interface NodeValue {
    title: string;
    path: string;
    outlink?: string[];
    backlink?: string[];
}

export interface Link {
    source: string | Node;
    target: string | Node;
    isVirtual?: boolean;
}

export interface LocalMapItem {
    title: string;
    path: string;
    outlink: string[];
    backlink: string[];
}

export interface BioChainMapItem {
    title: string;
    outlink: string[];
    backlink: string[];
}

export interface QueueItem {
    path: string;
    depth: number;
}

export interface CanvasSize {
    width: number;
    height: number;
}

export interface MousePosition {
    x: number;
    y: number;
}

export type Page = vp.Page;
export type titleGetter = (page: Page) => string;

export interface BiGraphConfig {
    localGraphDeep?: number; // 局部关系图谱的深度（以当前页面为中心） 默认为5
    foldEmptyGraph?: boolean; // 是否折叠空的关系图谱（只有一个节点） 默认为false
    graphMaxWidth?: number; // 最大宽度 单位: px 默认为 Infinity
    graphHeight?: number; // 度 单位: px  默认为 300
    enableGlobalGraph?: boolean; // 是否启用全局关系图谱 默认为true
    enableLocalGraph?: boolean; // 是否启用局部关系图谱 默认为true
    titleGetter?: titleGetter; // 标题获取器 需要返回页面的标题 默认为 page的title，如果不存在就用path
}
