import { defineUserConfig, defaultTheme, viteBundler } from "vuepress";
import { resolve } from "path";

export default defineUserConfig({
    base: process.env.NODE_ENV === 'development' ? '/' : '/zyfui/',
	lang: "zh-CN",
	title: "zyf UI",
	description: "这是我的第一个 VuePress 站点",
	locales: {
		"/": {
			lang: "zh-CN",
			title: "zyfui",
		},
	},
	theme: defaultTheme({}),
	bundler: viteBundler({
		viteOptions: {
			resolve: {
				alias: {
					zyfui: resolve(__dirname, "../../packages/zyfui/src/index.ts"),
				},
			},
		},
	}),
    plugins: []
});
