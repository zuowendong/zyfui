import { defineUserConfig, defaultTheme } from "vuepress";
import { sidebar } from "./sidebarConfig";

export default defineUserConfig({
	base: "/zyfui/",
	lang: "zh-CN",
	title: "zyf UI",
	description: "zyfui 官方文档",
	head: [["link", { rel: "icon", href: "/images/logo-1.png" }]],

	theme: defaultTheme({
		logo: "/images/logo-1.png",
		logoDark: null,
		repo: "https://github.com/Zuowendong/zyfui",
		contributors: true,
		contributorsText: "author",

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

		sidebar,
	}),
});
