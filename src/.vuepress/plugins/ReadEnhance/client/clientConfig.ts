import { defineClientConfig } from 'vuepress/client'

import ReadEnhance from "./ReadEnhance.vue"

export default defineClientConfig({
  setup() {},
  enhance: ({ app }) => {
    app.component('ReadEnhance', ReadEnhance)
  },
  layouts: {},
  // rootComponents: ['ReadMenu'],
})
