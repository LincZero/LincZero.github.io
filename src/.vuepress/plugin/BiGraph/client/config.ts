/**
 * @fileOverview clientConfig.ts
 * @author erduotong
 */
import type {ClientConfig} from "vuepress/client";
import {defineClientConfig} from "vuepress/client";
import Layout from "./components/Layout.vue";

export default defineClientConfig({
    enhance({app, router, siteData}) {
    },
    setup() {
    },
    layouts: {
        Layout,
    },
    rootComponents: [],
}) as ClientConfig;
