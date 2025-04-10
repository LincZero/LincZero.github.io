import { defineClientConfig } from 'vuepress/client';
import Tikz from './component/Tikz.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Tikz", Tikz);
  },
})
