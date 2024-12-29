// noinspection ES6UnusedImports

/**
 * @fileOverview 获取全局图谱的数据
 */
import {MapNodeLink} from "../types/index.js";
import {ref} from "vue";

export const graphDataName = "globalRelationalGraph.json";
export const showGlobalGraph = ref(false);

/**
 * 获取全局图谱的数据
 */
export async function getGlobalGraph(
    isDev: boolean,
    withBaseFunc: Function,
    graphPath: { target: string } = {target: ""}
): Promise<MapNodeLink | null> {
    try {
        if (isDev) {
            const module = await import(/* @vite-ignore */ `/${graphPath.target}`);
            return module?.default || null;
        } else {

            const response = await fetch(withBaseFunc(`${graphDataName}`), {
                cache: "no-cache"
            });
            if (!response.ok) {
                return null;
            }
            return (await response.json()) || null;
        }
    } catch (e) {
        console.error(e);
        return null;
    }
}
