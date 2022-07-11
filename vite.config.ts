/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import postcssMixins from "postcss-mixins";
import postcssRem from "postcss-rem";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "zzooui",
            fileName: (format) => `zzooui.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    css: {
        postcss: {
            plugins: [postcssMixins, postcssRem],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    test: {
        environment: "happy-dom",
    },
    
});
