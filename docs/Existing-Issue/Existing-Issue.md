---
sidebar_position: 1
---

# 注意事項/既知の不具合
----
:::info
こちらのページにない不具合・バグと思わしき動作があった場合には  
[Twitter(X)](https://x.com/Tukumomi_VR)や[Booth](https://momiji-maples.booth.pm/)へお問い合わせをお願いします。
:::

:::note
STS: SecretTalkSystem
:::

## 注意事項

- **本ギミックについて**  
    本ギミックはVRChatの特殊な挙動を利用して製作されています。  
    その為、VRChat側の仕様変更により、本ギミックが正常に動作しなくなる可能性があります。  
    予めご了承ください。  

- **声の制御について**  
    自身の声の制御はAnimatorで行っているため、セーフティー等でAnimatorが無効/読み込まれていない際は通常通りに声が聞こえます。  
    その為、主にフレンド間での利用を想定しています。  
    Public / Friend+等では本ギミック利用中でも他のユーザーに声が聞こえる可能性があるため、ご留意ください。  

- **ConnectionModeについて**  
    ConnectionModeの当たり判定はPlayerLocalのコライダーです。  
    その為、相手がコライダー入りのギミックを使用している場合、離れていても意図せず接続される可能性があります。  

- **TransceiverModeについて**  
    相手に直接声を届けられるようになる本モードですが、声を届けられる距離はワールド依存(通常30ｍ)に限定されます。  
    また、下記の「Particle Safety / Limiter」の影響も受けることを予めご留意ください。  

- **位置情報取得エラー(Particle Safety / Limiterの影響)について**  
    本ギミックでは相手の位置情報取得時にParticleを利用しています。  
    この影響により、「被接続者側」の設定でParticle SafetyやParticle Limiterが掛かっていると一部機能が利用できません。(TransceiverMode等)  

- **Information Haloについて**  
    本ギミック利用中はこのヘイローを表示することで、Remoteユーザーに本ギミックを利用中ということを提示しています。  
    この仕組みはコミュニケーションの"不幸なすれ違い"を防止するために導入しているため、極力ヘイローは削除しないようにしてください。  

- **HUDの位置変更について**  
    本ギミックではHUDの位置はシステム側で制御しています。  
    ユーザー側でシェーダーの設定を変更しないでください。(表示が壊れます)  

- **FPSの制限について**  
    本ギミックは10FPSのまでの環境で挙動することをテスト済みです。  
    ですが本ギミックのシステム上、FPSが下がることに全体の処理が遅くなりますので予めご了承ください。  
    また、9FPS以下の環境は動作保証対象外となります。  
    (Unityの仕様かはわかりかねますが一部処理が動かなくなります。)  
    [**詳細についてはこちら**](https://buicha.social/notes/aqc8y68xyp)  

- **インポスター生成時の問題**  
    アバターの初回アップロード時に本ギミックを含めた状態でアップロードすると、インポスターの顔の部分がおかしくなる場合があります。  
    インポスターをご利用の際は初回アップロード時に本ギミックを含めないようにご注意ください。  

- **Avatar Scaling使用時の注意事項**  
    VRChatのContact不具合により、STSで接続中にAvatarScalingを使用すると動作がおかしくなる場合があります。  
    対策を入れていますが、表示がおかしくなった際は**STSの再起動/アバター再読み込み等**をお試しください。  
    ※STS接続中は極力Avatar Scalingを使用しないようにしてください。  
    [**詳細についてはこちら(VRChat Canny)**](https://feedback.vrchat.com/bug-reports/p/1784contact-receiver-fails-to-trigger-on-the-first-interaction-after-loading-und)。  

- **Avatar Interactionについて**  
    Avatar Interactionが"Everyone"以外に設定されている場合、非フレンドとのPublicChannelでの接続ができません。  
    必要に応じて設定を変更してください。  
    [**Avatar Interactionの解説(公式)**](https://docs.vrchat.com/docs/permissions-and-settings)

- **アバターに含まれるAudioSourceの同時再生上限について**  
    VRC上ではアバターに含まれるAudioSourceは同時に3つまでしか再生できません。  
    既に3つ再生されている状態で4つ目の音を再生した際、同時再生数が3つ以内に戻っても**4つ目の音は一度オンオフしない限り再生されません。**  

----
## 他アセットとの干渉について
本ギミックは一部Armatureに変更を加えています。  
その都合上、Armatureへの操作を行う他ギミックとの共存は出来ないかと思われます。  

- **AvatarPoseSystemについて**  
    ⚠️併用不可です。  
    (併用時に正常動作しないことを確認しています。)

- **VRCFuryについて**  
    併用可能です。  
    `v1.1424.0`で動作確認済み。  

- **Light Limit Changerについて**  
    LLC併用時はLLCの除外設定(下層を含む)に本ギミックを設定してください。  
    (色変更系機能が動かなくなるため。)  
    LLCと併用する場合は`v2.12.3`**以上のバージョン**をご利用ください。

----
## 既知の不具合
- **WDオフのアバターで発生する不具合について**  
本ギミックは[AAP(Animated Animator Parameter)](https://vrc.school/docs/Other/AAPs/)という手法を使用しています。  
この手法利用時に発生するバグとして**下記条件**を満たした際に、**【WDオンのようなDefault状態に戻す挙動が発生するバグ】** が存在します。  
このため、アバターによっては挙動がおかしくなることがあるかもしれません。もしおかしな挙動が発生した際は一度ご確認ください。
    - **WDオフ環境**
    - **AAPを含むAnimationがアバター内のいずれかのAnimatorに含まれている** 
    - **アバターに含まれるいずれかのAnimator内で```InterruptionSource = Next```関連の割り込み操作が発生した際**    
:::info
例：マヌカのActionLayer内に存在する"AFK_Working"の"AFK_Intro→AFK"にてこの設定がされており、AnimatorをWDオフに変更後に高速でAFKに入る/出るを繰り返すとこのバグが発生します。
:::