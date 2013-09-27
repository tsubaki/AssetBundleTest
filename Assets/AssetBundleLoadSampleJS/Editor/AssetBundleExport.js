#pragma strict


@MenuItem("Assets/Export AssetBundle")
static function ExportAssetBundle()
{
	var path  = EditorUtility.SaveFilePanel ("Save Resource", "", "New Resource", "unity3d");

	if (path.Length != 0) {
		var selection = Selection.GetFiltered(typeof(Object), SelectionMode.DeepAssets);
		BuildPipeline.BuildAssetBundle(Selection.activeObject, selection, path, 
        		BuildAssetBundleOptions.CollectDependencies | BuildAssetBundleOptions.CompleteAssets);
				Selection.objects = selection;
	}
}