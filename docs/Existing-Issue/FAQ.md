---
sidebar_position: 2
---

# FAQ/よくある質問
----
:::note
STS: SecretTalkSystem
:::

### Q. 非フレンドとPublicChannelで接続できない。  
Avatar Interactionが`Everyone`以外に設定されている場合、非フレンドとのPublicChannelでの接続ができません。  
必要に応じて設定を変更してください。  
[**Avatar Interactionの解説(公式)**](https://docs.vrchat.com/docs/permissions-and-settings)

### Q. PrivateChannelの意味がよくわからない  
PrivateChannelは接続相手ごとに使分けが可能です。  
例えば、Aさんには`CH.1`で接続/Bさんには`CH.2`で接続した場合、`CH.1`選択時はAさんにのみ声が聞こえます。   

### Q. STSでPrivate接続時、接続出来たか確認する手段はないの？  
相手がSTSユーザーの場合、MainHUDのRemoteIcon(右側のアイコン)が相手に描画され点灯します。  
非導入者の場合は相手の反応以外で確認手段がないため、接続後に声が聞こえるか確認してください。

### Q. ヘイローを消せるようにできないの？  
注意事項にも記載していますが、コミュニケーションの"不幸なすれ違い"を防止するためにデフォルトでは消せないようになっています。  

”不幸なすれ違い”というのは、本ギミックで接続されて会話している「非導入者」が第三者視点では一人で話しているように見え、「この場にブロックしているユーザーがいるのではないか」という不安に駆られてしまう可能性があること等をさします。  

**⚠️ヘイローの表示/非表示をできるようにする場合、自己責任で行ってください。** 

### Q. STSとMA Floor Adjuster併用時、ViewPointがずれる。
[セレナちゃん](https://misosoupkobo.booth.pm/items/8545785)等での発生を確認しています。  
[`ModularAvatar v1.18.5`](https://github.com/bdunderscore/modular-avatar/releases/tag/1.18.5)  にて修正されました。  
問題が発生する場合、MAを最新版にアップデートしてお試しください。  

### Q. STSを導入したらビルド後に頭の位置がおかしくなった！  
おそらく`MA Move To`が正しく動いていないのが原因です。  
`ModularAvatar v1.18.2`以上にしてお試しください。  
問題が発生する場合、MAを最新版にアップデートしてお試しください。  

### Q. VR時、HUDが表示されない…  
シェーダー側の問題の可能性が高いです。  
以下をご確認ください。  
<input type="checkbox" /> [`ScreenSpaceHUD & Overlay Shader`](https://momiji-maples.booth.pm/items/8607640)の最新版を導入しているか  
<input type="checkbox" /> デスクトップ版VRChatでは正しく表示されるか  

VR時のみ表示されない場合、HMDの種類を記載した上でお問い合わせください。  
(HMD対応のため、シェーダー側の更新の際にデバッグのご協力をお願いすることがあります。)  

※「**VIVE Focus Vision**」は、`ScreenSpaceHUD & Overlay Shader v1.0.5`にて対応しました。