---
sidebarDepth: 2
---

# 配置 Mod

LittleSkin 仅提供材质的上传、存储、检索和分享的功能。想要在 Minecraft 中显示你在 LittleSkin 设置的材质的话，你需要在 Minecraft 客户端中安装皮肤 Mod 并修改相应的配置文件。

所有的配置文件内容都可以在用户中心的[「皮肤 Mod」](https://mcskin.littleservice.cn/user/config)页面找到。

::: tip  提示
如果你希望使用Yggdrasil（外置登录）加载你的皮肤和皮肤，请移步至 [Yggdarsil - 在客户端使用](/advanced-usage/yggdrasil.html#在客户端使用)
:::

::: tip 你也许想知道
- CustomSkinLoader 的日志位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.log`  
- CustomSkinLoader 的配置文件位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.json` 
- CustomSkinLoader 的材质缓存文件夹位于 `.minecraft/CustomSkinLoader/caches`
:::

::: warning 注意
当前 LittleSkin 支持 CustomSkinAPI 和传统加载。我们建议使用 CustomSkinLoader 通过 CustomSkinAPI 加载材质。**如何安装 Mod 请自行搜索，本文假定你已经安装好了皮肤 Mod**，仅说明如何配置皮肤 Mod 使其从 LittleSkin 加载材质。
:::

## CustomSkinLoader

### 14.7 + <Badge text="MC 1.8 +"/>

LittleSkin 自 CustomSkinLoader 14.7 起被添加到了 CustomSkinLoader 的默认加载列表中，加载顺序仅次于正版皮肤。如果你使用**最新版本**，安装完成后你**无需进行任何修改**即可加载来自 LittleSkin 的材质。Cheers!

::: tip 发生了角色名冲突？
请参考下方的适用于 CustomSkinLoader 13.1 ~ 14.6a 的配置方法来修改 CustomSkinLoader 的配置文件。
:::

### 13.1 ~ 14.6a <Badge text="MC 1.7.10 -"/>

::: tip 你也许遇到了一些问题
- 我该去哪里下载适用于 Minecraft 1.7.10 的 CustomSkinLoader ？
- 在 Minecraft 1.8以下（不包含）看不见双层皮肤 / Alex 模型的皮肤？

\> 移步至 [常见问题解答 - 客户端加载相关](/faq.html#我该去哪里下载适用于-minecraft-1-7-10-的-customskinloader-？)
:::

有以下2种配置方式，请根据你的版本来选择：

#### 使用 ExtraList (CSL 14.4 ~ 14.6a) <Badge text="推荐"/>

CustomSkinLoader 14.4 起支持通过 ExtraList 的方式添加皮肤站。你可以在用户中心的[「皮肤 Mod」](https://mcskin.littleservice.cn/user/config)页面下载到 LittleSkin 的 ExtraList 文件 **（位于页面右下角）**，将其放入 `.minecraft/CustomSkinLoader/ExtraList/` 目录下即可。

在安装完成后的第一次启动游戏并成功载入 CustomSkinLoader 时 ExtraList 文件会被自动删除，这是正常现象。如果不出意外的话，此时 LittleSkin 已被添加至 CustomSkinLoader 加载列表列表顶部。

#### 手动修改配置文件 (CSL 13.1 ~ 14.6a)

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，仅有一个配置文件，文件名为 `CustomSkinLoader.json`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "LittleSkin",
            "type": "CustomSkinAPI",
            "root": "https://mcskin.littleservice.cn/"
        },
        {
            "name": "BlessingSkin",
            "type": "CustomSkinAPI",
            "root": "http://skin.prinzeugen.net/"
        },
        {
            "name": "Mojang",
            "type": "MojangAPI"
        },
        {
            "name": "ElyBy",
            "type": "ElyByAPI"
        },
        {
            "name": "SkinMe",
            "type": "UniSkinAPI",
            "root": "http://www.skinme.cc/uniskin/"
        },
        {
            "name": "LocalSkin",
            "type": "Legacy",
            "checkPNG": false,
            "skin": "LocalSkin/skins/{USERNAME}.png",
            "model": "auto",
            "cape": "LocalSkin/capes/{USERNAME}.png",
            "elytra": "LocalSkin/elytras/{USERNAME}.png"
        },
        {
            "name": "GlitchlessGames",
            "type": "GlitchlessAPI",
            "root": "https://games.glitchless.ru/api/minecraft/users/profiles/textures/?nickname\u003d"
        }
    ]
}
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

### 12.9 - <Badge type="warning" text="罕见"/>

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，共有两个配置文件，文件名分别为 `skinurls.txt` 和 `capeurls.txt`。

首先请使用记事本或者任意代码编辑器打开 `skinurls.txt`，将原有的所有内容替换为以下内容：

```
https://mcskin.littleservice.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

保存退出后再使用记事本或任意代码编辑器打开 `capeurls.txt`，将原有的所有内容替换为以下内容：

```
https://mcskin.littleservice.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

## 传统加载

```
# 皮肤查询 API
https://mcskin.littleservice.cn/skin/{playername}.png
# 披风查询 API
https://mcskin.littleservice.cn/cape/{playername}.png
```

请将以上两个查询 API 填入你的皮肤 Mod 的配置文件的对应位置。其中 `{playername}` 为角色名，请将其替换为 皮肤Mod 指定的占位符。
