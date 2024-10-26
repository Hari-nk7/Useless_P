gdjs.newCode = {};
gdjs.newCode.localVariables = [];
gdjs.newCode.GDNewPanelSpriteObjects1= [];
gdjs.newCode.GDNewPanelSpriteObjects2= [];
gdjs.newCode.GDreplayObjects1= [];
gdjs.newCode.GDreplayObjects2= [];
gdjs.newCode.GDNewSprite2Objects1= [];
gdjs.newCode.GDNewSprite2Objects2= [];


gdjs.newCode.mapOfGDgdjs_9546newCode_9546GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.newCode.GDreplayObjects1});
gdjs.newCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.newCode.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.newCode.mapOfGDgdjs_9546newCode_9546GDreplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mainn", false);
}}

}


};

gdjs.newCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.newCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.newCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.newCode.GDreplayObjects1.length = 0;
gdjs.newCode.GDreplayObjects2.length = 0;
gdjs.newCode.GDNewSprite2Objects1.length = 0;
gdjs.newCode.GDNewSprite2Objects2.length = 0;

gdjs.newCode.eventsList0(runtimeScene);
gdjs.newCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.newCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.newCode.GDreplayObjects1.length = 0;
gdjs.newCode.GDreplayObjects2.length = 0;
gdjs.newCode.GDNewSprite2Objects1.length = 0;
gdjs.newCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['newCode'] = gdjs.newCode;
