/**
 * @file SidebarLinks.ts
 * @description
 * 一些变量
 * props.config 侧边栏连接配置，包括文件架构树
 * openGroupIndexs 记录该文件夹下哪些index是展开的
 */

import type { PropType, VNode } from "vue";
import { defineComponent, h, ref, watch } from "vue";
import { useRoute } from "vuepress/client";

import SidebarChild from "@theme-hope/modules/sidebar/components/SidebarChild";
import SidebarGroup from "@theme-hope/modules/sidebar/components/SidebarGroup";
import { isMatchedSidebarItem } from "@theme-hope/modules/sidebar/utils/index";

// x import type { ResolvedSidebarItem } from "../utils/index.js";

// v import "../styles/sidebar-links.scss";
import "vuepress-theme-hope/sidebar/styles/sidebar-links.scss"

export default defineComponent({
  name: "SidebarLinks",

  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array as PropType<ResolvedSidebarItem[]>,
      required: true,
    },

    /**
     * is the sidebar folds automatically
     *
     * 侧边栏是否自动折叠
     */
    isAutoFold: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const route = useRoute();
    const openGroupIndexs = ref(props.isAutoFold ? [-1] : []);
    //const id = Math.floor(Math.random() * 100);
    //console.log("[SidebarLinks::setup]", id, SidebarGroup, SidebarChild, props.config);

    const toggleGroup = (index: number): void => {
      //console.log("[SidebarLinks::toggle]", id, JSON.stringify(openGroupIndexs.value), index);
      if (props.isAutoFold) {
        openGroupIndexs.value = [index];
      } else {
        const currentIndex = openGroupIndexs.value.indexOf(index);

        if (currentIndex === -1) openGroupIndexs.value.push(index);
        else openGroupIndexs.value.splice(currentIndex, 1);
      }
    };

    watch(
      () => route.path,
      (): void => {
        const index = props.config.findIndex((item) =>
          isMatchedSidebarItem(route, item),
        );

        if (!props.isAutoFold && !openGroupIndexs.value.includes(index))
          openGroupIndexs.value.push(index);
        //console.log("[SidebarLinks::watch]", id, JSON.stringify(openGroupIndexs.value), index); // 话说上面两行好像没什么用
      },
      { immediate: true, flush: "post" },
    );

    return (): VNode | null =>
      h(
        "ul",
        { class: "vp-sidebar-links" },
        props.config.map((config, index) =>
          h(
            "li",
            config.type === "group"
              ? h(SidebarGroup, {
                  config,
                  open: openGroupIndexs.value.includes(index),
                  onToggle: () => toggleGroup(index),
                })
              : h(SidebarChild, { config }),
          ),
        ),
      );
  },
});
