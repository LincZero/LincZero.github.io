import { defineClientConfig, usePageData } from 'vuepress/client'
import { nextTick, watch } from 'vue'

import NewLayout from "./NewLayout.vue"
import {Layout} from "vuepress-theme-hope/client/export.js";

export default defineClientConfig({
  setup() {},
  enhance: ({ app, router, siteData }) => {},
  layouts: {
    OldLayout: Layout, // 允许手动使用回旧布局
    Layout: NewLayout,
  },
  rootComponents: [],
})
