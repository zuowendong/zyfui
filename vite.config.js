import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Delete from "rollup-plugin-delete";
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
	base: "./",
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue"],
		})
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
			name: "zyfui",
			fileName: (format) => `zyfui.${format}.js`,
		},
		rollupOptions: {
			external: ["vue", "element-plus"],
			output: {
				globals: {
					vue: "Vue",
					"element-plus": "elementPlus",
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
	resolve: {
		alias: {
			"@": pathSrc,
		},
	},
});
