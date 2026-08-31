---
sidebar_position: 1
---

# SecretTalkSystem

<iframe width="448" height="252" src="https://www.youtube.com/embed/zN3t4c00NhI?si=y37Bpnsu4iRrWhRz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
[**SecretTalkSystem**](https://momiji-maples.booth.pm/items/8604995)(以下STS)は、自身の声を制御し任意の人にだけ声を聞こえるようにするアバターギミックです。  
STSユーザー同士での接続/連携機能はもちろん、STS非導入者に対しても接続可能です。  

`SecretTalkMode`実行中は接続したユーザーにのみ声が聞こえるようになり、それ以外のユーザーには声が聞こえなくなります。  
(※制限については[注意事項](/docs/Existing-Issue/#注意事項)を参照)  
また、TransceiverModeでは離れた相手にも直接声を届けられるようになるので、ワールド探索等でもご利用いただけます。  
主な機能は下記となります。　　

<details>
    <summary>**【通話機能】**</summary>

    - **Private接続機能(個人間接続)**  
        PrivateChannelを指定して個人間接続が可能です。※STS非導入者にも接続可能  
        **自身から相手への一方的な接続です。**  
        STS同士で相互接続する際はお互いにConnectionModeで接続してください。  
        (ConnectionMode時再接触でChannel上書き可能)  
        **接続したいユーザーごとにChannelを使い分けることが可能です。**  

        **[PublicChannelFollowSystem]**  
        PublicChannelを選択して個人間接続時、接続主の選択しているPublicChannelの会話を共有できるようになります。  

    - **Public接続機能(STS同士の接続)**  
        PublicChannelはインスタンス内で共有されるChannelです。  
        PublicChannelは選択時にそのChannelの参加者全員へ自動接続されます。  
        (この接続はPrivate接続と異なり、Channel選択中だけのものとなります。)  

    - **TransceiverMode(遠距離通話モード)**  
        自身の声、あるいは他のSTSユーザーの声を耳元で聞こえるようにするモードです。  
        主に広めのワールド等での利用を想定しています。  
        この機能の制限については[注意事項](/docs/Existing-Issue/#注意事項)をご参照ください。

</details>

<details>
    <summary>**【専用HUD/ヘイロー/ドローン】**</summary>

    STSにはシステムの状態を示すための**HUD/ヘイロー/ドローン**が付属します。  
    HUD/ドローンは設定から表示設定可能。  
    ヘイロー/ドローンはAudioLink対応しているため対応ワールドで光ります。  
    また、ヘイローはギミックの性質上設定からは消せないようになっています。  

    **【HUD】**  
        HUDは3種類存在し、それぞれ以下のような性質を持ちます。  
        各々の詳細については説明画像をご覧ください。  
        - MainHUD  
        自身のシステム状況、及び接続状況を表示します。  
        STS導入者同士での接続時、右側のアイコンが点灯/変化します。  
        (この際の右側アイコンはRemotePlayerによって描画されます。)　　

        - GalleryView  
        STS同士で接続時、接続人数に合わせて相手の顔/アイコンを描画します。  
        アイコンはFaceCamera無効/読み込めない際に表示されます。  
        アイコンは任意の画像を設定可能です。  
        他にも話している際のインジケーター表示やAFKの表示等の機能があります。  

        - Indicator  
        VRChatのデフォルトのマイクアイコンの横にSTSのインジケーターを表示します。  
        ここではSecretTalkModeの有効状態、TransceiverModeの通信状況、位置情報取得エラー(後述)の表示が行われます。  
        **この表示は接続相手にも描画され、またHUDを非表示にしても描画されます。**   

    **【ヘイロー】**  
        ヘイローは色によって接続状況を周りのプレイヤーへ伝えます。
        - 黄[Local]  
            自身のヘイローを示します。接続状況による変化はありません。  
        - 赤[Remote]  
            SecretTalkMode有効状態で非接続(声が聞こえていない)状態です。  
        - 緑[Remote]  
            SecretTalkMode有効状態で接続(声が聞こえる)状態です。  

    **【ドローン】**  
        ドローンはペット機能を兼ね備えた情報表示ユニットであり、以下の情報を表示します。

        - Owner Crown  
            そのユーザーがOwner状態ということ示します。  
            Owner … 接続中のSTSユーザーの中から1人だけ選出される、HUDの一部描画上書き等を行うユーザーです。  
        - Select Channel Info(上部ヘイロー)  
            そのユーザーが現在選択中のChannelを表示します。  
        - Joined Channel Info(下部ヘイロー)  
            自身(接続者)がそのユーザーへ個人接続した際のChannelを表示します。  
            ※自身の個人接続時のChannel情報が**相手のドローン**に表示されます。
        - Information Halo  
            上記で説明したプレイヤー自身に付くヘイローと同様のものです。  

    ![説明1](/img/homepage/説明画像01.png)
    ![説明2](/img/homepage/説明画像02.png)

</details>

----
## 対応アバター

:::info
**標準的な人型アバター** … Armature/Hips等、"Armature"から始まり頭文字が大文字のHumanoid Boneで構成されたアバター  
**標準外の人型アバター** … armature/hips等、Armature以外の文字から始まったり頭文字が小文字のHumanoid Boneで構成されたアバター  
:::

標準的な人型Armatureのアバターに対応しています。  
(例: マヌカ、プラム、輝夜 等)  

標準外のArmature構成のアバターに実装する場合、[**特殊な対応**](/docs/HowTo/#標準外Armatureへの対応方法)が必要となります。  
こちらは今後のModularAvatarの更新に伴い自動化していく予定です。  

----
## 利用規約について
:::info
ユーザーの不利益を伴う規約更新を行う場合、施行の一ヶ月前には[**Twitter(X)**](https://x.com/Tukumomi_VR)、[**Booth商品ページ**](https://momiji-maples.booth.pm/items/8604995)、**本ページ**等で周知を行います。  
その際はお手数ですが、規約の再確認をお願い致します。
:::
:::danger
このデジタル製品はいかなるウェブサイト上でも再配布/再販/漏洩することを禁止しています。  
(この「デジタル製品」とは、本商品フォルダに含まれるデータやUnityPackage内のすべてのデータファイルを指します。)  
:::

- [SecretTalkSystem利用規約](https://drive.google.com/drive/folders/10tmW9j6ObY2UqMhfN0Ax1-qee51AMNed?usp=drive_link)
----
## ハッシュタグについて

Twitter(X)等でSecretTalkSystemの画像や内容を投稿する際は下記ハッシュタグをご利用いただけるととても嬉しいです！  

**#SecretTalkSystem**  
**#千秋万狐**

----

## 動作確認環境

|前提|対応バージョン|
|:---:|:---:|  
|Unity|2022.3.22f1|
|VRC SDK|3.10.4|  
|Modular Avatar|v1.18.3|  