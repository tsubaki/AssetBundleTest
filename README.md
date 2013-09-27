AssetBundleTest
===============


AssetBundleを取得してインスタンス化するまでのサンプル（JS）

C#でもあまり変更点無く作れる

--

1. AssetBundleとしてエクスポートしたい項目を選択して**Export AssetBundle**を選択。処理はフォルダ以下のアセット一覧を取得し、**BuildPipeline.BuildAssetBundle**でパッキングしているだけ。
2.   エクスポートした**.unity3d**ファイルを適当なサーバーに配置。
3.  **WWWクラス**で.unity3dファイルを取得し、WWWクラスの**bundle.mainAsset**で中身を取得。
4.  **GameObject.Instantiate**で対象をインスタンス化。

--