import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Delete from "rollup-plugin-delete";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue"],
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: "Icon",
				}),
			],
		}),
		Components({
			resolvers: [
				IconsResolver({
					enabledCollections: ["ep"],
				}),
				ElementPlusResolver(),
			],
		}),
		Icons({
			autoInstall: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
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
	// css: {
	// 	preprocessorOptions: {
	// 		less: {
	// 			javascriptEnabled: true,
	// 		},
	// 		scss: {
	// 			charset: false,
	// 		},
	// 	},
	// },
	resolve: {
		alias: {
			"@": pathSrc,
		},
	},
	// test: {
	// 	...vitestConfig,
	// },
});
