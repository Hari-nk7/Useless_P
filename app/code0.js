gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.GDNewPanelSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewPanelSpriteObjects2= [];
gdjs.Main_32menuCode.GDplay_9595buttonObjects1= [];
gdjs.Main_32menuCode.GDplay_9595buttonObjects2= [];
gdjs.Main_32menuCode.GDcreditObjects1= [];
gdjs.Main_32menuCode.GDcreditObjects2= [];


gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDplay_95959595buttonObjects1Objects = Hashtable.newFrom({"play_button": gdjs.Main_32menuCode.GDplay_9595buttonObjects1});
gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDcreditObjects1Objects = Hashtable.newFrom({"credit": gdjs.Main_32menuCode.GDcreditObjects1});
gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Main_32menuCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDplay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playmenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("credit"), gdjs.Main_32menuCode.GDcreditObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_9546Main_959532menuCode_9546GDcreditObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "credits", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Main_32menuCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Main_32menuCode.GDcreditObjects1.length = 0;
gdjs.Main_32menuCode.GDcreditObjects2.length = 0;

gdjs.Main_32menuCode.eventsList0(runtimeScene);
gdjs.Main_32menuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Main_32menuCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Main_32menuCode.GDcreditObjects1.length = 0;
gdjs.Main_32menuCode.GDcreditObjects2.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
