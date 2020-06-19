# OAuth 2

::: tip
这篇文档是面向开发者的，普通用户可能无法理解。

如果你看不懂这个页面在说些什么，直接关闭这篇文档或者浏览其它文档即可，忽略这部分内容不会影响你正常使用 LittleSkin 的基础功能。
:::

LittleSkin 支持 OAuth 2 服务端。你可以在你的应用中集成「使用 LittleSkin 账户登录」这样的功能。

## 文档

请参阅：[Blessing Skin API 文档 - OAuth2 认证](https://bs-community.github.io/blessing-skin-api-docs/#oauth2-%E8%AE%A4%E8%AF%81)。

## 创建 OAuth 2 应用

在你的网站中集成 OAuth 2 之前，你需要先在 LittleSkin 创建应用并获取客户端 ID 和客户端 Secret。

1. 打开 OAuth 2 应用管理页面，你可以在侧边栏的 开发者 -> OAuth2 应用 找到这个页面的链接。点击「创建应用」。
![open-page](./assets/oauth2/open-page.png)
2. 输入你的应用的名称和回调 URL，点击「提交」。
![create-app](./assets/oauth2/create-app.png)
3. 你的 OAuth 2 应用就创建好啦，你可以在页面中找到你的 OAuth 2 应用的客户端 ID 和客户端 Secret。