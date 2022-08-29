import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
	lang: "zh-CN",
	title: "zyf UI",
	description: "这是我的第一个 VuePress 站点",

	theme: defaultTheme({
		// 默认主题配置
		navbar: [
			{
				text: "首页",
				link: "/",
			},
			{
				text: "组件",
				link: "/compsMD/",
			},
		],

		sidebar: [
			{
				title: "组件",
				path: "/compsMD/",
				collapsable: true,
				children: [
					{
						text: "表格",
						link: "/compsMD/zyfTable",
					},
				],
			},
		],
	}),
});
