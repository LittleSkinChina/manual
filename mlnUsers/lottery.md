# 抽奖活动

所有 LittleSkin 的用户都可以参与抽奖，只需要使用 1001 积分兑换抽奖活动参与资格即可。兑换方式请查看 [积分兑换](./redeem.md) 页面。

按理来说绝大多数用户应该都符合参与抽奖活动的条件（因为注册账户后每位用户都能获得至少 1000 分的初始积分，每日签到也可以获得至少 10 积分），但是为了防止有人恶意薅羊毛，我们还是设计了这个门槛。

抽奖奖池分为早鸟奖池和全员奖池，两个奖池可以同时参与。其中早鸟奖池只有 UID 小于 500000 的用户可以参与（且自动参与，但不可同时中奖），而全员奖池则是所有兑换了抽奖活动参与资格的用户都可以参与的。两个奖池的奖品内容不同，具体奖品种类和数量请查看下方的奖品列表。

## 奖品列表

关于 LittleSkin 周边礼品的渲染图和详细说明，请查看 [礼品列表](./prizes.md) 页面。

::: warning 注意
所有礼品均不可折现，但可转赠。
:::

### 早鸟奖池 

- 正版 Minecraft：Java 版和 Bedrock 版（适用于 PC 端）国际版 一份 * 1
- LittleSkin 周边礼包一套 * 3，每份中包含：
  - LittleSkin 五周年定制错别字口罩 10 只
  - LittleSkin 文件夹一个
  - LittleSkin 徽章一个
  - LittleSkin 创始人签名定制明信片一张
  - LittleSkin 积分 10000
- LittleSkin 五周年定制错别字口罩 10 只 * 3
- LittleSkin 徽章一个 * 3
- LittleSkin 文件夹一个 * 3
- LittleSkin 创始人签名定制明信片一张 * 5
- LittleSkin 积分 10000 * 5
- 定制皮肤一份 * 1

### 全员奖池

- LittleSkin 五周年定制错别字口罩 10 只，* 3
- LittleSkin 徽章一个 * 3
- LittleSkin 文件夹一个 * 3
- LittleSkin 创始人签名定制明信片一张 * 3
- LittleSkin 积分 5000 * 10
- MCBBS 服务器提升卡三张 * 5
- Minecraft TNT 靠枕一个 * 1
- Minecraft 苦力怕靠枕一个 * 1
- 定制皮肤一份 * 1

## 抽奖方法

本次百万用户庆祝活动的抽奖将使用运营组使用 Python 编写的抽奖程序进行，抽奖方法如下：

1. 按本页面的奖品列表顺序，导入两个奖池的奖品列表；
2. 按兑换抽奖活动参与资格的用户的兑换时间顺序，导入参与名单；
3. 使用 `random.seed()` 方法，将随机数生成器的种子设为 2023 年 9 月 20 日中国体育彩票发行的超级大乐透彩票的开奖号码；
4. 使用 `random.shuffle()` 方法打乱两个奖池的奖品列表和参与名单的顺序；
5. 从参与名单中筛选早鸟名单；
6. 使用 `random.seed()` 方法，将随机数生成器的种子设为 2023 年 9 月 21 日中国福利彩票发行的双色球彩票的开奖号码；
7. 使用 `random.sample()` 方法，从早鸟名单中随机抽取与早鸟奖池奖品数量相同的用户，作为早鸟奖池的中奖用户；
8. 将早鸟奖池的中奖用户与早鸟奖池奖品列表按照数组下标一一对应，生成早鸟奖池的抽奖结果，并导出为 CSV 文件；
9. 从参与名单中剔除在早鸟奖池中中奖的用户；
10. 使用 `random.sample()` 方法，从参与名单中抽取与全员奖池奖品数量相同的用户，作为全员奖池的中奖用户；
11. 将全员奖池的中奖用户与全员奖池奖品列表按照数组下标一一对应，生成全员奖池的抽奖结果，并导出为 CSV 文件；

上述作为随机数生成器的种子的彩票的开奖号码均来源于彩票发行方的官方网站的相关页面（[大乐透开奖页面](https://www.lottery.gov.cn/kj/kjlb.html?dlt)、[双色球开奖页面](http://www.cwl.gov.cn/ygkj/wqkjgg/)）。`random.seed()` 方法的参数均为字符串类型，开奖号码按照前区（超级大乐透）或红球（双色球）在前、后区（超级大乐透）或蓝球（双色球）在后、从小到大的顺序排序，两个号码之前有一个空格作为分隔，不足两位的号码前加 `0`。具体参数示例请查看下方的抽奖程序源码。


抽奖程序源码如下：

:::: details 点击查看抽奖程序源码
``` python
import random
import pandas as pd

early_prizes = [ # 早鸟奖池
    'minecraft', # 正版 Minecraft：Java 版和 Bedrock 版（适用于 PC 端）国际版 一份 * 1
    'package', 'package', 'package', # LittleSkin 五周年定制礼包一套 * 3
    'facemask', 'facemask', 'facemask', # LittleSkin 五周年定制错别字口罩 10 只 * 3
    'badge', 'badge', 'badge', # LittleSkin 徽章一个 * 3
    'folder', 'folder', 'folder', # LittleSkin 文件夹一个 * 3
    'postcard', 'postcard', 'postcard', 'postcard', 'postcard', # LittleSkin 创始人签名定制明信片一张 * 5
    'score_10000', 'score_10000', 'score_10000', 'score_10000', 'score_10000', # LittleSkin 积分 10000 * 5
    'skin' # 定制皮肤一份 * 1
]

all_prizes = [ # 全员奖池
    'facemask', 'facemask', 'facemask', # LittleSkin 五周年定制错别字口罩 10 只 * 3
    'badge', 'badge', 'badge', # LittleSkin 徽章一个 * 3
    'folder', 'folder', 'folder', # LittleSkin 文件夹一个 * 3
    'postcard', 'postcard', 'postcard', # LittleSkin 创始人签名定制明信片一张 * 3
    'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', 'score_5000', # LittleSkin 积分 5000 * 10
    'mcbbs', 'mcbbs', 'mcbbs', 'mcbbs', 'mcbbs', # MCBBS 服务器提升卡三张 * 5
    'tnt', 'creeper', # Minecraft TNT 靠枕一个 * 1，Minecraft 苦力怕靠枕一个 * 1
    'skin' # 定制皮肤一份 * 1
]

csv = pd.read_csv('participants.csv') # 读取参与名单
participants = csv.uid.tolist()

random.seed('01 12 21 22 31 02 09') # 09/20/2023 大乐透开奖号码，前 5 个为前区号码，后 2 个为后区号码
random.shuffle(early_prizes) # 打乱早鸟奖池顺序
random.shuffle(all_prizes) # 打乱全员奖池顺序

random.shuffle(participants) # 打乱参与名单顺序
earlybirds = list(filter(lambda x: x < 500000, participants)) # 筛选早鸟名单

random.seed('06 08 10 13 16 28 13') # 09/21/2023 双色球开奖号码，前 6 个为红球号码，最后一个为蓝球号码
early_winners = random.sample(earlybirds, len(early_prizes)) # 早鸟奖池抽奖
early_result = pd.DataFrame({'uid': early_winners, 'prize': early_prizes}) # 生成早鸟奖池抽奖结果
early_result.to_csv('early_winners.csv', index=False) # 导出早鸟奖池抽奖结果为 CSV 文件

participants = list(filter(lambda x: x not in early_winners, participants)) # 在参与名单中剔除已中奖的早鸟
all_winners = random.sample(participants, len(all_prizes)) # 全员奖池抽奖
all_result = pd.DataFrame({'uid': all_winners, 'prize': all_prizes}) # 生成全员奖池抽奖结果
all_result.to_csv('all_winners.csv', index=False) # 导出全员奖池抽奖结果为 CSV 文件
```
::::

## 领奖

抽奖结果公布后，我们将通过中奖用户在 LittleSkin 绑定的邮箱与其取得联系，确认领奖相关事宜。请在活动结束后留意你的邮箱和下方的中奖名单。

正版 Minecraft：Java 版和 Bedrock 版（适用于 PC 端）国际版 将通过在线方式发放；实物奖品将于 2023年 9 月至 12 月间通过顺丰速运或京东快递分批发放。被抽中的欧皇的奖品的运费可以由运营组支付（如果你愿意帮我们减轻些许经济压力的话，也可以选择自付，我们将为你的 LittleSkin 账户添加 20000 积分）；积分将直接发放到对应的账户。

## 中奖名单

抽奖活动中奖名单将于 2023 年 9 月 23 日 24 时前在本页面公布。