module.exports = {
    title: 'LittleSkin 用户使用手册',
    base: '/',
    ga: 'UA-136793183-1',
    head: [
        ['link', { rel: 'icon', href: 'https://resource.littleskin.cn/favicon.png' }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        docsRepo: 'tnqzh123/littleskin-manual',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们完善这个页面',
        nav: [
            { text: '返回 LittleSkin', link: 'https://littleskin.cn' },
            { text: '捐助支持', link: 'https://afdian.net/@tnqzh123' }
        ],
        sidebar: [
            ['/', '欢迎页'],
            ['/tos.html', '用户服务条款'],
            {
                title: '新手指引',
                collapsable: true,
                children: [
                    '/newbee-guide/create-player.html',
                    '/newbee-guide/set-textures.html',
                    '/newbee-guide/config-mod.html'
                ]
            },
            '/score.html',
            {
                title: '高级功能',
                collapsable: true,
                children: [
                    '/advanced-usage/api.html',
                    '/advanced-usage/yggdrasil.html',
                    '/advanced-usage/oauth2.html'
                ]
            },
            '/faq.html',
            ['/how-to-report-question.html', '报告问题的正确姿势'],
            ['/user-group.html', '用户交流群']
        ],
        lastUpdated: '最后更新 ',
        algolia: {
            apiKey: 'process.env.ALGOLIA_APIKEY',
            indexName: 'littleskin'
        }
    },
    evergreen: true
}
