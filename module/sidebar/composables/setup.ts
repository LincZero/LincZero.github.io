/**
 * @file setup.ts
 * @description
 * 关于文件结构的对象
 *     全局只计算一次并存起来 (首次访问网站)：setupSidebarItems
 *     而保存的值会取多遍 (每次切换或视情况取出使用)：useSidebarItems
 */

import { computedWithControl } from "@vueuse/core";
import type { ComputedRef, InjectionKey } from "vue";
import { computed, inject, provide } from "vue";
import {
  usePageData,
  usePageFrontmatter,
  useRouteLocale,
} from "vuepress/client";

import { useThemeLocaleData } from "@theme-hope/composables/index";

// v import { resolveSidebarItems } from "./resolveConfig.js";
// v import { resolveSidebarItems } from "vuepress-theme-hope/client/modules/sidebar/composables/resolveConfig.js";
import { resolveSidebarItems } from "./resolveConfig.ts";
// x import type { ThemeNormalPageFrontmatter } from "../../../../shared/index.js";
// x import type { ResolvedSidebarItem } from "../utils/index.js";

declare const __VUEPRESS_DEV__: boolean;

export type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>;

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol(
  __VUEPRESS_DEV__ ? "sidebarItems" : "",
);

/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = (): void => {
  const frontmatter = usePageFrontmatter<ThemeNormalPageFrontmatter>();
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const routeLocale = useRouteLocale();

  // Get sidebar config from frontmatter > themeConfig
  const sidebarConfig = computed(() =>
    frontmatter.value.home
      ? false
      : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure",
  );
  const headerDepth = computed(
    () => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2,
  );

  const sidebarItems = computedWithControl(
    () => [
      sidebarConfig.value,
      headerDepth.value,
      page.value.path,
      __VUEPRESS_DEV__ ? page.value.headers : null,
    ],
    () =>
      resolveSidebarItems({
        config: sidebarConfig.value,
        routeLocale: routeLocale.value,
        page: page.value,
        headerDepth: headerDepth.value,
      }),
  );

  // console.log("[setup::setupSidebarItems]", sidebarItems?.value)
  provide(sidebarItemsSymbol, sidebarItems);
};

/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol);

  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");

  return sidebarItems;
};
