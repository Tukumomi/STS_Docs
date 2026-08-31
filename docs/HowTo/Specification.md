---
sidebar_position: 1
---

# 基本仕様
### 基本仕様 / Specifications

    ```
    【Unityバージョン/前提アセット】
        - Unity 2022.3.22f1
        - VRChat SDK - Avatars 3.10.4
        - VRChat SDK - Base 3.10.4
        - Modular Avatar 1.18.5
    【Write Defaults】
        - ON/OFF 両対応
    【Animatorレイヤー数】 
        ※DBT_CoreModule: STS導入時に一緒に入るDBT制御用のシステムです。  
        - SecretTalkSystem: 3 + 5(Standalone Animator) + DBT(MA Merge Motion)  
        - DBT_CoreModule: 2 + DBT(MA Merge Motion)  
    【EXParameter数】
        - 通常版: 14bit
        - Lite版: 6bit
    ```

### パフォーマンスランク情報 / Performance Ranking

※主要部分のみ記載  

```
- Triangles: 7220
- Skinned Mesh Renderers: 5
- Mesh Renderers: 9
- Material Slots: 30
- Phys Bone Components: 6
- Non-Local Contact Component Count: 47
- Animator Count: 6
- Particle Systems: 15
- Audio Sources: 11
- Texture Memory Usage: 4 MB
- Constraint Component Count: 19
- Raycasts: 1
```