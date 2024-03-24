import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: webpackBundler(),
    title: 'LittleSkin 用户使用手册',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: 'https://littleskin.cn/favicon.png' }]
    ],
    serviceWorker: true,
    markdown: {
        links: {
            externalAttrs: { target: '_blank' }
        }
    },
    theme: defaultTheme({
        logo: 'https://littleskin.cn/favicon.png',
        repo: 'LittleSkinChina/manual',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们完善这个页面',
        navbar: [
            { text: '返回 LittleSkin', link: 'https://littlesk.in' },
            { text: '百万用户活动', link: '/mlnUsers/' },
            { text: '社区支持机器人', link: 'https://bot-manual.commspt.littlesk.in/' },
            { text: '捐助支持', link: 'https://afdian.net/@tnqzh123' }
        ],
        sidebarDepth: 1,
        sidebar: {
            '/': [
                {
                    'text': '首页',
                    'link': '/'
                },
                {
                    'text': '政策条款',
                    'collapsible': true,
                    'children': [
                        {
                            'text': '用户服务条款',
                            'link': '/policies/tos.html'
                        },
                        {
                            'text': '隐私政策',
                            'link': '/policies/privacy.html'
                        }
                    ]
                },
                {
                    'text': '新手指引',
                    'collapsible': true,
                    'children': [
                        '/newbee/player.html',
                        '/newbee/textures.html',
                        '/newbee/mod.html',
                        '/newbee/launch.html'
                    ]
                },
                {
                    'text': '高级功能',
                    'collapsible': true,
                    'children': [
                        '/advanced/yggdrasil.html',
                        '/advanced/oauth2.html',
                        '/advanced/api.html'
                    ]
                },
                '/score.html',
                '/faq.html',
                '/report.html',
                '/email.html',
                {
                    text: '用户交流群',
                    link: '/user-group.html'
                }
            ],
            '/5thAnniv': [
                {
                    'text': '首页',
                    'link': '/5thAnniv/'
                },
                '/5thAnniv/singup.html',
                '/5thAnniv/schedule.html',
                '/5thAnniv/lottery.html',
                {
                    'text': '空岛生存竞赛',
                    'link': '/5thAnniv/skyblock.html'
                },
                {
                    'text': '小游戏竞赛',
                    'collapsible': true,
                    'children': [
                        {
                            'text': '简述',
                            'link': '/5thAnniv/minigames/'
                        },
                        {
                            'text': '初赛',
                            'link': '/5thAnniv/minigames/preliminary.html'
                        },
                        {
                            'text': '复赛',
                            'link': '/5thAnniv/minigames/quaterfinal.html'
                        },
                        {
                            'text': '半决赛',
                            'link': '/5thAnniv/minigames/semifinal.html'
                        },
                        {
                            'text': '决赛',
                            'link': '/5thAnniv/minigames/final.html'
                        }
                    ]
                },
                {
                    'text': '积分兑换',
                    'link': '/5thAnniv/redeem.html'
                },
                {
                    'text': '奖品',
                    'link': '/5thAnniv/rewards.html'
                },
                '/5thAnniv/winner.md'
            ],
            '/mlnUsers': [
                {
                    'text': '首页',
                    'link': '/mlnUsers/'
                },
                '/mlnUsers/lottery.html',
                '/mlnUsers/redeem.html',
                '/mlnUsers/donate.md',
                '/mlnUsers/prizes.html'
            ]
        },
        lastUpdated: true,
        lastUpdatedText: '最后更新 ',
        algolia: {
            apiKey: process.env.ALGOLIA_APIKEY,
            indexName: 'littleskin'
        },
        smoothScroll: true
    }),
    plugins: [
        docsearchPlugin({
            apiKey: process.env.ALGOLIA_APIKEY,
            indexName: 'littleskin'
        }),
        googleAnalyticsPlugin({
            id: 'G-5PFHR1YTFN',
        }),
    ],
    evergreen: true
})
