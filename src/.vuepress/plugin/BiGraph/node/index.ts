/**
 * @fileOverview index.ts
 * @author erduotong
 */
import {getDirname, path} from "vuepress/utils";
import {bioChainMap, buildBioChainMap, writeGlobalGraph, writeTempGlobalGraph,} from "./buildMapData.js";
import type {App} from "vuepress/core";
import {BiGraphConfig} from "../types/index.js";

const __dirname = getDirname(import.meta.url);
export let options: BiGraphConfig = {};
const BiGraph = (config: BiGraphConfig = {}) => {
    options = config;
    const graph_path = {target: ""};
    return {
        name: "vuepress-plugin-relational-graph",
        onInitialized: (app: App) => {
            Object.assign(bioChainMap, {});

            if (options.titleGetter) {
                buildBioChainMap(app.pages, options.titleGetter);
            } else {
                buildBioChainMap(app.pages);
            }

            graph_path.target = writeTempGlobalGraph(app);
        },
        onGenerated: async (app: App) => {
            await writeGlobalGraph(app);
        },
        clientConfigFile: path.resolve(__dirname, "../client/config.ts"),
        define: {
            __RELATIONAL_GRAPH_FOLD_EMPTY_GRAPH: options.foldEmptyGraph || false,
            __RELATIONAL_GRAPH_LOCAL_GRAPH_DEEP: options.localGraphDeep || 5,
            __RELATIONAL_GRAPH_MAX_WIDTH: options.graphMaxWidth || Infinity,
            __RELATIONAL_GRAPH_HEIGHT: options.graphHeight || 300,
            __RELATIONAL_GRAPH_ENABLE_GLOBAL_GRAPH:
                options.enableGlobalGraph !== undefined
                    ? options.enableGlobalGraph
                    : true,
            __RELATIONAL_GRAPH_ENABLE_LOCAL_GRAPH:
                options.enableLocalGraph !== undefined
                    ? options.enableLocalGraph
                    : true,
            __RELATIONAL_GRAPH_GRAPH_PATH: graph_path,
        },
    };
};

export default BiGraph;
