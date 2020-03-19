---
sidebarDepth: 2
---

# 配置 Mod

LittleSkin 仅提供材质的上传、存储、检索和分享的功能。想要在 Minecraft 中显示你在 LittleSkin 设置的材质的话，你需要在 Minecraft 客户端中安装皮肤 Mod 并修改相应的配置文件。

所有的配置文件内容都可以在用户中心的「皮肤 Mod」页面找到。

:::tip
当前 LittleSkin 支持 CustomSkinAPI 和传统加载。我们建议使用 CustomSkinLoader 通过 CustomSkinAPI 加载材质。如何安装 Mod 请自行搜索，本文假定你已经安装好了皮肤 Mod，仅说明如何配置皮肤 Mod 使其从 LittleSkin 加载材质。
:::

## CustomSkinLoader

### 14.7 +

LittleSkin 自 CustomSkinLoader 14.7 起被添加到了 CustomSkinLoader 的默认加载列表中，加载顺序仅次于正版皮肤，安装完成后你无需进行任何修改即可加载来自 LittleSkin 的材质。Cheers!

如果因为存在与你同名的正版角色导致冲突而无法加载来自 LittleSkin 的材质，请参考下方的适用于 CustomSkinLoader 13.1 ~ 14.6a 的配置方法来修改 CustomSkinLoader 的配置文件。

### 13.1 ~ 14.6a

#### ExtraList

CustomSkinLoader 14.4 起支持通过 ExtraList 的方式添加皮肤站。你可以在用户中心的「皮肤 Mod」页面下载到 LittleSkin 的 ExtraList 文件，将其放入 `.minecraft/CustomSkinLoader/ExtraList/` 目录下即可。

在安装完成后的第一次启动游戏并成功载入 CustomSkinLoader 时 ExtraList 文件会被自动删除，这是正常现象。如果不出意外的话，此时 LittleSkin 已被添加至 CustomSkinLoader 加载列表列表顶部。

#### 手动修改配置文件

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，仅有一个配置文件，文件名为 `CustomSkinLoader.json`。请使用记事本或者任意代码编辑器将其打开，将原有的所有内容替换成以下内容：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "LittleSkin",
            "type": "CustomSkinAPI",
            "root": "https://littleskin.cn/csl/"
        },
        {
            "name": "Blessing Skin",
            "type": "CustomSkinAPI",
            "root": "https://skin.prinzeugen.net/csl/"
        },
        {
            "name": "Mojang",
            "type": "MojangAPI"
        }
    ]
}
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

### 12.9 -

配置文件存放于 `.minecraft/CustomSkinLoader/` 目录中，共有两个配置文件，文件名分别为 `skinurls.txt` 和 `capeurls.txt`。

首先请使用记事本或者任意代码编辑器打开 `skinurls.txt`，将原有的所有内容替换为以下内容：

```
https://littleskin.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

保存退出后再使用记事本或任意代码编辑器打开 `capeurls.txt`，将原有的所有内容替换为以下内容：

```
https://littleskin.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

保存退出，再次打开 Minecraft 之后，你应该就能看到你在 LittleSkin 中设置的材质了。

## 传统加载

```
# 皮肤查询 API
https://littleskin.cn/skin/{playername}.png
# 披风查询 API
https://littleskin.cn/cape/{playername}.png
```

请将以上两个查询 API 填入你的皮肤 Mod 的配置文件的对应位置。其中 `{playername}` 为角色名，请将其替换为对应的占位符。