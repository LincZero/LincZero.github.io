import { defineClientConfig, usePageData } from 'vuepress/client'
import { nextTick, watch } from 'vue'

import { Layout } from "vuepress-theme-hope/client";

import ReadEnhance from "./ReadEnhance.vue"

export default defineClientConfig({
  setup() {},
  enhance: ({ app, router, siteData }) => {
    app.component('ReadEnhance', ReadEnhance)
  },
  layouts: {},
  // rootComponents: ['ReadMenu'],
})
