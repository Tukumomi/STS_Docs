---
sidebar_position: 1
---

# 導入方法と基本的な使い方  
:::info
    **MA v1.18.6現在の導入方法です。**  
:::
:::warning
    ⚠️**MA v1.18.6現在、アバター直下以外に配置する/Prefabの名称を変更するとギミックが壊れるためご注意ください。**  
:::
----
### 導入方法
1. **予め以下のアセットをUnityにインポートしてください。**  
   - [**VRChat SDK**] v3.10.4以上  
   - [**Modular Avater**](https://modular-avatar.nadena.dev/ja/) v1.18.5以上  
   - [**liltoon**](https://lilxyzw.github.io/lilToon/)  
   - [**ScreenSpaceHUD & Overlay Shader**](https://momiji-maples.booth.pm/items/8607640)  

2. **AssetからSecretTalkSystemの任意のPrefabをアバター直下に入れてください。**  

   |Prefab名|同期パラメーター数|説明|
   |:---|:---|:---|
   |SecretTalkSystem|14bit|すべての機能を搭載した通常版|
   |SecretTalkSystem_Lite|6bit|Private接続のみのバージョン軽量バージョンです。<br />通常版から以下の機能をオミットしています。<br />**・PublicChannel接続機能/Channel選択機能**<br />**・ドローン表示設定(無効設定)**<br />**・効果音設定(有効設定)**<br />**・FaceCamera設定(有効設定)**<br /><br />標準状態を変更したい際はこちら<br />[【パラメーター解説】](#parameters)|

3. **各アイテムの位置調整(必要時のみ)**  
   位置確認用にEditorOnlyのオブジェクトを表示しています。  
   Prefab配下にあるPositionSettingsの各項目の**Target_Position**から位置調整可能です。  

   |Object名|説明|
   |:---|:---|
   |InformationHalo_Position|ヘイローの位置調整用<br />**Target_Position_PB_Root**と**Target_Position_PB_End**の位置を調整してください。|
   |CollisionCheck_Position|ConnectionMode時の魔方陣の位置調整用|
   |Drone_Position|ドローンの位置調整用|
   |FaceCamera_Position|GalleryView使用時のFaceCameraの位置調整用<br />FaceCamera表示がおかしい場合、Gizmoを表示してカメラ範囲内に顔が収まるように調整してください。|

<details id="parameters">
<summary>**【Texture改変について】**</summary>

    付属しているClip/PSDはClipが元データになっています。  

    - GalleryViewのアイコン  
    `HUD_Frame.png`の左上のアイコンを任意のアイコンに変えてください。  

    - HUDの各アイコン  
    一部のアイコンはカスタム可能で、STS同士で接続時に(相手視点で)**自身がOwnerの場合**相手のHUDに改変したアイコンが表示されます。  
    (詳細はClip/PSDデータをご参照ください。)  
    **※色の変更は非推奨です。**  

    - ドローンの色変え  
    `STSDrone_Texture.png`を改変してください。  
    **※発光パーツ(黄色部分)はシェーダーで色を調整しているためTexture側は弄らないようにしてください。**  

</details>

<details id="parameters">
<summary>**【パラメーター解説】**</summary>

    STSの主要なパラメーター解説です。  
    標準状態を変更したい場合、STSの`MA Parameters`から各パラメーターの初期値を変更してください。  
    非同期パラメーターは改変をする際などの参考にしてください。  
    |パラメーター名(同期)|パラメーター型(bit)|説明|
    |:---|:---|:---|
    |STS/Sync/Active|Bool(1bit)|STS自体の有効化設定|
    |STS/Sync/SelectChannel_1～3|Bool(1bit)×3|接続Channel(Ch1-8)の値を3bitにエンコードしたもの|
    |STS/Sync/SelectChannel/PublicChannelMode|Bool(1bit)|PublicChannelか否かの設定<br />(上記と組み合わせて4bitでChを示します)|
    |STS/Sync/TransceiverMode|Bool(1bit)|TransceiverMode(自身の声)の有効化設定|
    |STS/Sync/ConnectionMode|Bool(1bit)|ConnectionModeの有効化設定|
    |STS/Sync/ConnectionReset|Bool(1bit)|Private接続のリセット処理|
    |STS/Sync/HUD/FaceCamera/Camera_Active|Bool(1bit)|GalleryViewのFaceCameraの有効化設定|
    |STS/Sync/Sound/Active|Bool(1bit)|効果音の有効化設定|
    |STS/Sync/Drone/ForceShow|Bool(1bit)|ドローンの表示設定: 常時表示|
    |STS/Sync/Drone/Disable|Bool(1bit)|ドローンの表示設定: 非表示|
    |STS/Sync/SSC/CC/IsForwardingRemoteTrigger|Bool(1bit)|内部処理で使用する値です。<br />⚠️**非同期にしないでください**|

    |パラメーター名(非同期)|パラメーター型(bit)|説明|
    |:---|:---|:---|
    |STS/AAP/TriggerController/Trigger|Float(Local)|[Remote] ConnectionModeで接続後に1を取ります。|
    |STS/AAP/SelectChannel/JoinedAt|Float(Local)|[Remote] ConnectionModeで接続時のChannel情報をリセットするまで保持します。<br />`0` … 未接続<br />`1-8` … PrivateChannel<br />`9-16` … PublicChannel|
    |STS/AAP/IsSelfVoiceActiveByGimmick|Float(Local)|[Local] SecretTalkMode有効時に1を取ります。<br />[Remote] SecretTalkMode有効時に声が聞こえる状態だと1を取ります。|

</details>

<details id="標準外Armatureへの対応方法">
<summary>**【標準外Armatureへの対応方法】**</summary>

    通常の導入方法後、以下の設定を行ってください。

    1. MA Replace Objectのパス修正  
    `SecretTalkSystem/Main/VoiceController/Head_Origin`のReplace ObjectにアバターのHeadを設定し直してください。  
    2. ArmatureのHeadとの名前合わせ  
    `SecretTalkSystem/Main/VoiceController/Head`の`Head`Object名をArmatureに合わせてください。(`Head` or `head`)  
    (Animationには両パターンを設定しています。)  

</details>

----
### EXMenuの解説

<details>
    <summary>**EXMenuの解説**</summary>

    ![EXMenu](/img/homepage/EXMenu説明.png)  

    |メニュー名|機能|
    |:---|:---|
    |STS: Active|STSのシステム全体の有効化<br />※`SecretTalkMode`有効時、自動で有効化|
    |SecretTalkMode|内緒話モードの有効化<br />※`STS: Active`無効時、自動で無効化|
    |ConnectionMode|Private接続用。有効化中に右手に接続用の魔方陣を展開|
    |ContactReset|Private接続用。接続をすべて解除|
    |AllChannelListener|インスタンス内の全PublicChannelの会話を同時に聞く|
    |Channel|Private/PublicChannelの選択|
    |[Global]Sound Active|システム全体の効果音の有効化|
    |Transceiver Settings|**[Global]Self Voice** … 自身の声をTransceiver化<br /> **[Local]Others Voice** … 他のSTS導入済接続者の声をTransceiver化|
    |[Local]Hide: All HUD|HUD表示の非表示化。(インジケーター表示は除く)|
    |[Global]Drone Settings|**[Global]Drone: ForceShow** … ドローンの常時有効化。<br /> **[Global]Drone: Disable** … ドローンの非表示化|
    |[Local]Gallery View Settings|**[Local]GalleryView Active** … GalleryViewの有効化<br /> **[Local]GalleryView UI Height** … GalleryViewの高さの調整<br /> **[Local]GalleryView Camera Active** … FaceCameraの有効化(無効化時は設定されたアイコンを使用)|
    |[Local]Show: ListeningRange|ワールドの標準的なユーザーの声の届く範囲を可視化(30m)|
    |[Local]Monitor: ListeningRange|システム制御にListeningRangeを含めるかの設定。<br /> Activeなら接続相手(STS導入者)が圏外に出るとOwner権限を失います。|

    **※…ListeningRange: 標準設定時のワールドにおける、ユーザーの声の有効範囲(30m)のこと。**  

</details>

----
### 基本的な使い方/操作方法

STS全体の機能を利用するには`STS: Active`を有効化してください。  
`SecretTalkMode`が有効の時、自身の声を選択した人にしか聞こえないようにします。  

STSの接続には主に2種類の接続方法があります。  

<details>
<summary>**【Private接続時の流れ】**</summary>

    非STS導入者に対しても接続可能な接続方法です。  
    1. `STS: Active` `SecretTalkMode`有効化  
    2. `ConnectionMode`有効化  
    3. 任意のChannelを選択
        - **PrivateChannel選択時**  
            指定したPrivateChannellで相手に接続します。  
            相互接続する際にChannelを合わせる必要はありません。  
        - **PublicChannel選択時**  
            `PublicChannelFollowSystem`という特殊な接続モードに変化します。  
            このモードではPublicChannelで話している他のユーザーの声も接続したユーザーに聞こえるようになります。  
            (接続主が選択しているPublicChannelのみ)  
    4. 右手で相手に1秒ほど触れると接続  
        接続時の当たり判定は**ネームプレートの下あたり**(**ユーザー選択時のカプセルコライダー**)を参考にしてください。  
        **詳しい方向けの解説**: `PlayerLocalのCharacterControllerのカプセルコライダー`が当たり判定になります。  

</details>

<details>
<summary>**【Public接続時の流れ】**</summary>

    STS導入者同士で簡単に接続可能な接続方法です。  
    PublicChannelはインスタンス内で共有されます。  
    また、`AllChannelListener`を有効化するとそのインスタンス内の全PublicChannelで話しているユーザーの声を聴くことができます。  

    1. `STS: Active` `SecretTalkMode`有効化  
    2. 任意のPublicChannelを選択  
    Channel選択時点で自動接続されます。  

</details>

ドローンはハンドジェスチャーと組み合わせることで操作が可能です。  

<details>
<summary>**【ドローンの操作方法】**</summary>

ドローンは出現中、あなたにゆっくりと追従します。  
**※ドローンの操作はLater-Joiner非対応です。  
　同期ずれが発生したらSTSの再起動/ドローンを定位置に戻す等でリセットしてください。**  

ドローンには以下のアクションが可能です。
- **掴む/離す**  
   ドローンを掴んで引っ張ることが出来ます。  
   掴んだ時点でドローンが音を出し始め、離すごとに音が高くなっていきます。  
   離すと元の位置へ戻ります。    

- **指先追従/ワールド固定**  
   ドローンの前にPointGesture状態の人差し指を持っていくとあなたの指先についていきます。  
   左右どちらの手でも可能。追従中は360°自由に回転します。  
   GestureをPoint/Fist以外に変更すると元の位置へ戻ります。  
   追従中にGestureをFistにするとその場にワールド固定します。  
   ワールド固定を解除する場合はもう一度追従モードにしてから解除してください。  


</details>