gdjs.MainnCode = {};
gdjs.MainnCode.localVariables = [];
gdjs.MainnCode.GDfloor_9595lavaObjects1= [];
gdjs.MainnCode.GDfloor_9595lavaObjects2= [];
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects1= [];
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects2= [];
gdjs.MainnCode.GDpl1Objects1= [];
gdjs.MainnCode.GDpl1Objects2= [];
gdjs.MainnCode.GDkuzhiObjects1= [];
gdjs.MainnCode.GDkuzhiObjects2= [];
gdjs.MainnCode.GDNewSpriteObjects1= [];
gdjs.MainnCode.GDNewSpriteObjects2= [];
gdjs.MainnCode.GDNewSprite2Objects1= [];
gdjs.MainnCode.GDNewSprite2Objects2= [];
gdjs.MainnCode.GDNewSprite3Objects1= [];
gdjs.MainnCode.GDNewSprite3Objects2= [];
gdjs.MainnCode.GDfake_9595platformObjects1= [];
gdjs.MainnCode.GDfake_9595platformObjects2= [];
gdjs.MainnCode.GDbg1Objects1= [];
gdjs.MainnCode.GDbg1Objects2= [];
gdjs.MainnCode.GDfake_9595p4Objects1= [];
gdjs.MainnCode.GDfake_9595p4Objects2= [];
gdjs.MainnCode.GDexitObjects1= [];
gdjs.MainnCode.GDexitObjects2= [];
gdjs.MainnCode.GDNewSprite4Objects1= [];
gdjs.MainnCode.GDNewSprite4Objects2= [];


gdjs.MainnCode.eventsList0 = function(runtimeScene) {

};gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDpl1Objects1Objects = Hashtable.newFrom({"pl1": gdjs.MainnCode.GDpl1Objects1});
gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDkuzhiObjects1Objects = Hashtable.newFrom({"kuzhi": gdjs.MainnCode.GDkuzhiObjects1});
gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.MainnCode.GDexitObjects1});
gdjs.MainnCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.MainnCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainnCode.GDpl1Objects1.length;i<l;++i) {
    if ( gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.MainnCode.GDpl1Objects1[k] = gdjs.MainnCode.GDpl1Objects1[i];
        ++k;
    }
}
gdjs.MainnCode.GDpl1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13540028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainnCode.GDpl1Objects1 */
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainnCode.GDpl1Objects1.length;i<l;++i) {
    if ( gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.MainnCode.GDpl1Objects1[k] = gdjs.MainnCode.GDpl1Objects1[i];
        ++k;
    }
}
gdjs.MainnCode.GDpl1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13541364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainnCode.GDpl1Objects1 */
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainnCode.GDpl1Objects1.length;i<l;++i) {
    if ( gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.MainnCode.GDpl1Objects1[k] = gdjs.MainnCode.GDpl1Objects1[i];
        ++k;
    }
}
gdjs.MainnCode.GDpl1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainnCode.GDpl1Objects1.length;i<l;++i) {
    if ( !(gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.MainnCode.GDpl1Objects1[k] = gdjs.MainnCode.GDpl1Objects1[i];
        ++k;
    }
}
gdjs.MainnCode.GDpl1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainnCode.GDpl1Objects1.length;i<l;++i) {
    if ( !(gdjs.MainnCode.GDpl1Objects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.MainnCode.GDpl1Objects1[k] = gdjs.MainnCode.GDpl1Objects1[i];
        ++k;
    }
}
gdjs.MainnCode.GDpl1Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainnCode.GDpl1Objects1 */
{for(var i = 0, len = gdjs.MainnCode.GDpl1Objects1.length ;i < len;++i) {
    gdjs.MainnCode.GDpl1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kuzhi"), gdjs.MainnCode.GDkuzhiObjects1);
gdjs.copyArray(runtimeScene.getObjects("pl1"), gdjs.MainnCode.GDpl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDpl1Objects1Objects, gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDkuzhiObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13543212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "new", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.MainnCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainnCode.mapOfGDgdjs_9546MainnCode_9546GDexitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playmenu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainnCode.GDfloor_9595lavaObjects1.length = 0;
gdjs.MainnCode.GDfloor_9595lavaObjects2.length = 0;
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects1.length = 0;
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects2.length = 0;
gdjs.MainnCode.GDpl1Objects1.length = 0;
gdjs.MainnCode.GDpl1Objects2.length = 0;
gdjs.MainnCode.GDkuzhiObjects1.length = 0;
gdjs.MainnCode.GDkuzhiObjects2.length = 0;
gdjs.MainnCode.GDNewSpriteObjects1.length = 0;
gdjs.MainnCode.GDNewSpriteObjects2.length = 0;
gdjs.MainnCode.GDNewSprite2Objects1.length = 0;
gdjs.MainnCode.GDNewSprite2Objects2.length = 0;
gdjs.MainnCode.GDNewSprite3Objects1.length = 0;
gdjs.MainnCode.GDNewSprite3Objects2.length = 0;
gdjs.MainnCode.GDfake_9595platformObjects1.length = 0;
gdjs.MainnCode.GDfake_9595platformObjects2.length = 0;
gdjs.MainnCode.GDbg1Objects1.length = 0;
gdjs.MainnCode.GDbg1Objects2.length = 0;
gdjs.MainnCode.GDfake_9595p4Objects1.length = 0;
gdjs.MainnCode.GDfake_9595p4Objects2.length = 0;
gdjs.MainnCode.GDexitObjects1.length = 0;
gdjs.MainnCode.GDexitObjects2.length = 0;
gdjs.MainnCode.GDNewSprite4Objects1.length = 0;
gdjs.MainnCode.GDNewSprite4Objects2.length = 0;

gdjs.MainnCode.eventsList1(runtimeScene);
gdjs.MainnCode.GDfloor_9595lavaObjects1.length = 0;
gdjs.MainnCode.GDfloor_9595lavaObjects2.length = 0;
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects1.length = 0;
gdjs.MainnCode.GDfloor_9595lava_9595flipObjects2.length = 0;
gdjs.MainnCode.GDpl1Objects1.length = 0;
gdjs.MainnCode.GDpl1Objects2.length = 0;
gdjs.MainnCode.GDkuzhiObjects1.length = 0;
gdjs.MainnCode.GDkuzhiObjects2.length = 0;
gdjs.MainnCode.GDNewSpriteObjects1.length = 0;
gdjs.MainnCode.GDNewSpriteObjects2.length = 0;
gdjs.MainnCode.GDNewSprite2Objects1.length = 0;
gdjs.MainnCode.GDNewSprite2Objects2.length = 0;
gdjs.MainnCode.GDNewSprite3Objects1.length = 0;
gdjs.MainnCode.GDNewSprite3Objects2.length = 0;
gdjs.MainnCode.GDfake_9595platformObjects1.length = 0;
gdjs.MainnCode.GDfake_9595platformObjects2.length = 0;
gdjs.MainnCode.GDbg1Objects1.length = 0;
gdjs.MainnCode.GDbg1Objects2.length = 0;
gdjs.MainnCode.GDfake_9595p4Objects1.length = 0;
gdjs.MainnCode.GDfake_9595p4Objects2.length = 0;
gdjs.MainnCode.GDexitObjects1.length = 0;
gdjs.MainnCode.GDexitObjects2.length = 0;
gdjs.MainnCode.GDNewSprite4Objects1.length = 0;
gdjs.MainnCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['MainnCode'] = gdjs.MainnCode;
