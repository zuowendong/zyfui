/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import postcssMixins from "postcss-mixins";
import postcssRem from "postcss-rem";
import Delete from "rollup-plugin-delete";
import { vitestConfig } from "./vitestConfig";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
	plugins: [
		dts({
			outputDir: "dist",
			staticImport: true,
			insertTypesEntry: true,
		}),
		vue(),
		AutoImport({
			imports: ["vue"],
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: "Icon",
				}),
			],
			dts: path.resolve(pathSrc, "auto-imports.d.ts"),
		}),
		Components({
			resolvers: [
				IconsResolver({
					enabledCollections: ["ep"]
				}),
				ElementPlusResolver(),
			],
			dts: path.resolve(pathSrc, "components.d.ts"),
		}),
		Icons({
			autoInstall: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "zyfui",
			fileName: (format) => `zyfui.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
			plugins: [
				Delete({
					targets: ["dist/*.{ico,txt}"],
					hook: "generateBundle",
				}),
			],
		},
	},
	css: {
		postcss: {
			plugins: [postcssMixins, postcssRem],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
			scss: {
				charset: false,
			},
		},
	},
	resolve: {
		alias: {
			"@": pathSrc,
		},
	},
	test: {
		...vitestConfig,
	},
});
