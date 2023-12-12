import { defineClientConfig } from "@vuepress/client";
import { useHint } from "E:/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.4_markdown-it@13.0.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.4_markdown-it@13.0.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "E:/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.4_markdown-it@13.0.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
