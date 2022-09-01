import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
	base: "/zyfui/",
	lang: "zh-CN",
	title: "zyf UI",
	description: "zyfui 官方文档",

	theme: defaultTheme({
		logo: "/images/logo.png",
		logoDark: null,
		repoLabel: '代码地址',
		repo: "https://github.com/Zuowendong/zyfui",
		contributors: true,
		contributorsText: 'author',

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
