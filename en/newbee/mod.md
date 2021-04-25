---
sidebarDepth: 2
---

# Mod Configurations

LittleSkin will only provide the functionality of uploading, storage, searching and sharing. If you want to use the textures applied in LittleSkin in Minecraft, you have to install skin loader mods in Minecraft Client and change related configuration files.

:::tip
Please make sure that you know how to install mods. This documentation will not explain how to install mods, but just how to configure them and allow them to load textures from LittleSkin.

In some cases, after you install your mod, you may have to launch the game and load a save to allow the mod to generate the configuration file. If you enabled the version isolation in your launcher, the file path of the configuration file may change.
:::

::: danger
You should only use one skin loader mod. Do not install multiple skin mods, otherwise, the skin might not load normally, it could even crash your game.
:::

::: warning
Except for SkinPort, you should only use a skin mod or Yggdrasil. Do not enable both at the same time, otherwise, the skin might not load normally.
:::

## CustomSkinLoader

CustomSkinLoader is our most recommended skin loader mod.

You can get more information about CustomSkinLoader at [MCBBS](https://www.mcbbs.net/thread-269807-1-1.html) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/customskinloader).

### 14.7 +

LittleSkin has been added to CustomSkinLoader's default loading list from version 14.7. It's just after the Mojang official loader. Usually, you don't need to change anything to load the textures from LittleSkin. Cheers!

If you are unable to load the texture from LittleSkin due to a conflict with a paid version character with the same name as you, please refer to the configuration method applicable to CustomSkinLoader 13.1 ~ 14.6a below to modify the configuration file of CustomSkinLoader.

### 13.1 ~ 14.6a

#### ExtraList

CustomSkinLoader supports adding the skin library using ExtraList from version 14.4. You can find LittleSkin's ExtraList file at「Generate Config」and put it under the file path `.minecraft/CustomSkinLoader/ExtraList/`.

After the first successful launch of the game after you install the mod, the ExtraList file of CustomSkinLoader will be automatically deleted, this is normal. If everything's okay, LittleSkin has been added to the top of the CustomSkinLoader loading list.

#### Modify manually the configuration file

The configuration file is under `.minecraft/CustomSkinLoader/`, and there's only one configuration file called `CustomSkinLoader.json`. Open it with any editor and replace the contents inside with:

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "LittleSkin",
            "type": "CustomSkinAPI",
            "root": "https://mcskin.littleservice.cn/csl/"
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

Save it. Once you relaunch Minecraft, you should see the textures that you've applied in LittleSkin.

### 12.9 -

Configuration file is under `.minecraft/CustomSkinLoader/`, and there's two configuration file: `skinurls.txt` and `capeurls.txt`.

Open `skinurls.txt` with any editor and replace the contents with:

```
https://mcskin.littleservice.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

Save it and open `capeurls.txt` with any editor and replace the contents with:

```
https://mcskin.littleservice.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

Save it. Once you relaunch Minecraft, you should see the textures that you've applied in LittleSkin.

## SkinPort

If you want to load skin with Alex's model in Minecraft 1.7.10, you should use SkinPort.

You can get more informations about SkinPort at [CurseForge](https://www.curseforge.com/minecraft/mc-mods/skinport).

::: tip
LittleSkin supports only SkinPort of version 1.7.10-v10a and above.

If you use Yggdrasil to load textures, then you just need to install any version of SkinPort. You don't need to change any configuration file.
:::

::: danger
SkinPort supports only Minecraft 1.7.10. For lower versions, there's no way to load skin with Alex's model right now.

Do not install SkinPort on other versions of Minecraft, it may crash your game!
:::

The configuration file is under `.minecraft/config/skinport.cfg`. Open it with any editior and replace the contents with:

``` conf
client {
    S:hostCustomServer=http://example.com
    S:hostCustomServer2Cape=https://mcskin.littleservice.cn/cape/%name%.png
    S:hostCustomServer2Skin=https://mcskin.littleservice.cn/skin/%name%.png
    B:useCrafatar=false
    B:useCustomServer=false
    B:useCustomServer2=true
    B:useMojang=false
}
```

Save it. Once you relaunch Minecraft, you should see the textures that you've applied in LittleSkin.

## Traditional loading

```
# Skin Search API
https://mcskin.littleservice.cn/skin/{playername}.png
# Cape Search API
https://mcskin.littleservice.cn/cape/{playername}.png
```

Put these two Search APIs in the configuration file of your mod. `{playername}` is your player's name, please replace it with the corresponding placeholder.
