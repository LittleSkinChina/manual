module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LittleSkin 用户使用手册',
    },
    '/en/': {
      lang: 'en-US',
      title: 'LittleSkin User Manual',
    },
  },
  ga: 'UA-136793183-1',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href:
          'https://littleskin-resource-1251562235.file.myqcloud.com/favicon.png',
      },
    ],
  ],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  themeConfig: {
    docsRepo: 'LittleSkinChina/manual',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: '简体中文',
        ariaLabel: 'Languages',
        editLinkText: '帮助我们完善这个页面',
        nav: [
          { text: '返回 LittleSkin', link: 'https://littlesk.in' },
          {
            text: '社区支持机器人',
            link: 'https://littleskin-commspt-bot-manual.netlify.app',
          },
          { text: '捐助支持', link: 'https://afdian.net/@tnqzh123' },
        ],
        sidebar: [
          ['/', '欢迎页'],
          {
            title: '政策条款',
            collapsable: true,
            children: [
              ['/policies/tos.md', '用户服务条款'],
              '/policies/privacy.md',
            ],
          },
          {
            title: '新手指引',
            collapsable: true,
            children: [
              '/newbee/player.md',
              '/newbee/textures.md',
              '/newbee/mod.md',
            ],
          },
          '/score.md',
          {
            title: '高级功能',
            collapsable: true,
            children: [
              '/advanced/api.md',
              '/advanced/yggdrasil.md',
              '/advanced/oauth2.md',
            ],
          },
          '/faq.md',
          ['/report.md', '报告问题的正确姿势'],
          '/email.md',
          ['/user-group.md', '用户交流群'],
        ],
        lastUpdated: '最后更新 ',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Help us improve this page',
        nav: [
          { text: 'Back to LittleSkin', link: 'https://littlesk.in' },
          {
            text: 'Commspt Bot',
            link: 'https://littleskin-commspt-bot-manual.netlify.app',
          },
          { text: 'Support Us', link: 'https://afdian.net/@tnqzh123' },
        ],
        sidebar: [
          ['/en/', 'Welcome'],
          {
            title: 'Policy',
            collapsable: true,
            children: [
              ['/en/policies/tos.md', 'User Terms of Service'],
              '/en/policies/privacy.md',
            ],
          },
          {
            title: 'Getting Started',
            collapsable: true,
            children: [
              '/en/newbee/player.md',
              '/en/newbee/textures.md',
              '/en/newbee/mod.md',
            ],
          },
          '/en/score.md',
          {
            title: 'Advanced',
            collapsable: true,
            children: [
              '/en/advanced/api.md',
              '/en/advanced/yggdrasil.md',
              '/en/advanced/oauth2.md',
            ],
          },
          '/en/faq.md',
          '/en/report.md',
          '/en/email.md',
          ['/en/user-group.md', 'User Groups'],
        ],
        lastUpdated: 'Last Updated',
      },
    },

    algolia: {
      apiKey: process.env.ALGOLIA_APIKEY,
      indexName: 'littleskin',
    },
    smoothScroll: true,
  },
  evergreen: true,
};
