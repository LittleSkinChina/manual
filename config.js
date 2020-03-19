module.exports = {
	title: 'LittleSkin 用户使用手册',  // 设置网站标题
	description: 'Xiao_Jin 魔改',
	themeConfig: {
		smoothScroll: true,
		nav: [
			{ text: "查看官方版", link: "https://manual.littleskin.cn/" }
		],
		sidebar: [
			["/", "欢迎页"],
			["/tos.html", "用户服务条款"],
			{
				title: "新手指引",
				collapsable: true,
				children: [
					"/newbee-guide/create-player.html",
					"/newbee-guide/set-textures.html",
					"/newbee-guide/config-mod.html"
				]
			},
			["/score.html", "积分系统"],
			{
				title: "高级功能",
				collapsable: true,
				children: [
					"/advanced-usage/yggdrasil.html",
					"/advanced-usage/api.html",
					"/advanced-usage/oauth2.html"
				]
			},
			["/faq.html", "常见问题解答"],
			["/how-to-report-question.html", "报告问题的正确姿势"],
			["user-group.html", "用户交流群"]
		],
		evergreen: true

	}
}

