---
sidebar_position: 2
---

# FAQ
----
:::note
STS: SecretTalkSystem
:::

### Q: 非フレンドとPublicChannelで接続できない。  
Avatar Interactionが`Everyone`以外に設定されている場合、非フレンドとのPublicChannelでの接続ができません。  
必要に応じて設定を変更してください。  
[**Avatar Interactionの解説(公式)**](https://docs.vrchat.com/docs/permissions-and-settings)

### Q: PrivateChannelの意味がよくわからない  
PrivateChannelは接続相手ごとに使分けが可能です。  
例えば、Aさんには`CH.1`で接続/Bさんには`CH.2`で接続した場合、`CH.1`選択時はAさんにのみ声が聞こえます。   

### Q: STSでPrivate接続時、接続出来たか確認する手段はないの？  
相手がSTSユーザーの場合、MainHUDのRemoteIcon(右側のアイコン)が相手に描画され点灯します。  
非導入者の場合は相手の反応以外で確認手段がないため、接続後に声が聞こえるか確認してください。

### Q: ヘイローを消せるようにできないの？  
注意事項にも記載していますが、コミュニケーションの"不幸なすれ違い"を防止するためにデフォルトでは消せないようになっています。  

”不幸なすれ違い”というのは、本ギミックで接続されて会話している「非導入者」が第三者視点では一人で話しているように見え、「この場にブロックしているユーザーがいるのではないか」という不安に駆られてしまう可能性があること等をさします。  

**⚠️ヘイローの表示/非表示をできるようにする場合、自己責任で行ってください。** 

### Q: STSとMA Floor Adjuster併用時、ViewPointがずれる。
[セレナちゃん](https://misosoupkobo.booth.pm/items/8545785)等での発生を確認しています。  
[`ModuleAvatar v1.18.5`](https://github.com/bdunderscore/modular-avatar/releases/tag/1.18.5)  にて修正されました。  
問題が発生する場合、MAを最新版にアップデートしてお試しください。  