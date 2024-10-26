gdjs.creditsCode = {};
gdjs.creditsCode.localVariables = [];
gdjs.creditsCode.GDbg3Objects1= [];
gdjs.creditsCode.GDbg3Objects2= [];
gdjs.creditsCode.GDmainmenuObjects1= [];
gdjs.creditsCode.GDmainmenuObjects2= [];


gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDmainmenuObjects1Objects = Hashtable.newFrom({"mainmenu": gdjs.creditsCode.GDmainmenuObjects1});
gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mainmenu"), gdjs.creditsCode.GDmainmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDmainmenuObjects1Objects, runtimeScene, true, false);
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

gdjs.creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsCode.GDbg3Objects1.length = 0;
gdjs.creditsCode.GDbg3Objects2.length = 0;
gdjs.creditsCode.GDmainmenuObjects1.length = 0;
gdjs.creditsCode.GDmainmenuObjects2.length = 0;

gdjs.creditsCode.eventsList0(runtimeScene);
gdjs.creditsCode.GDbg3Objects1.length = 0;
gdjs.creditsCode.GDbg3Objects2.length = 0;
gdjs.creditsCode.GDmainmenuObjects1.length = 0;
gdjs.creditsCode.GDmainmenuObjects2.length = 0;


return;

}

gdjs['creditsCode'] = gdjs.creditsCode;
