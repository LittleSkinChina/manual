module.exports = {
    title: 'LittleSkin 用户使用手册',
    base: '/',
    ga: 'UA-136793183-1',
    head: [
        ['link', { rel: 'icon', href: 'https://littleskin-resource-1251562235.file.myqcloud.com/favicon.png' }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        docsRepo: 'LittleSkinChina/manual',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们完善这个页面',
        nav: [
            { text: '返回 LittleSkin', link: 'https://littlesk.in' },
            { text: '社区支持机器人', link: 'https://bot-manual.restent.win' },
            { text: '捐助支持', link: 'https://afdian.net/@tnqzh123' }
        ],
        sidebar: [
            ['/', '欢迎页'],
            {
                title: '政策条款',
                collapsable: true,
                children: [
                    ['/policies/tos.html', '用户服务条款'],
                    '/policies/privacy.html'
                ]
            },
            {
                title: '新手指引',
                collapsable: true,
                children: [
                    '/newbee/player.html',
                    '/newbee/textures.html',
                    '/newbee/mod.html'
                ]
            },
            '/score.html',
            {
                title: '高级功能',
                collapsable: true,
                children: [
                    '/advanced/api.html',
                    '/advanced/yggdrasil.html',
                    '/advanced/oauth2.html'
                ]
            },
            '/faq.html',
            ['/report.html', '报告问题的正确姿势'],
			'/email.html',
            ['/user-group.html', '用户交流群']
        ],
        lastUpdated: '最后更新 ',
        algolia: {
            apiKey: process.env.ALGOLIA_APIKEY,
            indexName: 'littleskin'
        },
        smoothScroll: true
    },
    evergreen: true
}
