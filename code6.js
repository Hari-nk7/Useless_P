gdjs.playmenuCode = {};
gdjs.playmenuCode.localVariables = [];
gdjs.playmenuCode.GDNewPanelSpriteObjects1= [];
gdjs.playmenuCode.GDNewPanelSpriteObjects2= [];
gdjs.playmenuCode.GDmazeObjects1= [];
gdjs.playmenuCode.GDmazeObjects2= [];
gdjs.playmenuCode.GDplatrformerObjects1= [];
gdjs.playmenuCode.GDplatrformerObjects2= [];
gdjs.playmenuCode.GDegg_9595catcherObjects1= [];
gdjs.playmenuCode.GDegg_9595catcherObjects2= [];
gdjs.playmenuCode.GDexitObjects1= [];
gdjs.playmenuCode.GDexitObjects2= [];


gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDmazeObjects1Objects = Hashtable.newFrom({"maze": gdjs.playmenuCode.GDmazeObjects1});
gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDplatrformerObjects1Objects = Hashtable.newFrom({"platrformer": gdjs.playmenuCode.GDplatrformerObjects1});
gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDegg_95959595catcherObjects1Objects = Hashtable.newFrom({"egg_catcher": gdjs.playmenuCode.GDegg_9595catcherObjects1});
gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.playmenuCode.GDexitObjects1});
gdjs.playmenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("maze"), gdjs.playmenuCode.GDmazeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDmazeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maze", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platrformer"), gdjs.playmenuCode.GDplatrformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDplatrformerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mainn", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("egg_catcher"), gdjs.playmenuCode.GDegg_9595catcherObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDegg_95959595catcherObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ball game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.playmenuCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.playmenuCode.mapOfGDgdjs_9546playmenuCode_9546GDexitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.playmenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.playmenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.playmenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.playmenuCode.GDmazeObjects1.length = 0;
gdjs.playmenuCode.GDmazeObjects2.length = 0;
gdjs.playmenuCode.GDplatrformerObjects1.length = 0;
gdjs.playmenuCode.GDplatrformerObjects2.length = 0;
gdjs.playmenuCode.GDegg_9595catcherObjects1.length = 0;
gdjs.playmenuCode.GDegg_9595catcherObjects2.length = 0;
gdjs.playmenuCode.GDexitObjects1.length = 0;
gdjs.playmenuCode.GDexitObjects2.length = 0;

gdjs.playmenuCode.eventsList0(runtimeScene);
gdjs.playmenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.playmenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.playmenuCode.GDmazeObjects1.length = 0;
gdjs.playmenuCode.GDmazeObjects2.length = 0;
gdjs.playmenuCode.GDplatrformerObjects1.length = 0;
gdjs.playmenuCode.GDplatrformerObjects2.length = 0;
gdjs.playmenuCode.GDegg_9595catcherObjects1.length = 0;
gdjs.playmenuCode.GDegg_9595catcherObjects2.length = 0;
gdjs.playmenuCode.GDexitObjects1.length = 0;
gdjs.playmenuCode.GDexitObjects2.length = 0;


return;

}

gdjs['playmenuCode'] = gdjs.playmenuCode;
