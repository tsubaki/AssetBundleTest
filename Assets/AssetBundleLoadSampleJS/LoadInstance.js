#pragma strict

var url : String;

function OnGUI()
{
	if( GUILayout.Button("Load Prefab")){
		StartCoroutine(LoadPrefab());
	}
}

function LoadPrefab()
{
	var www = new WWW( url);
	yield  www;
	
	var bundle = www.assetBundle;
	GameObject.Instantiate(bundle.mainAsset);
	bundle.Unload(false);
}