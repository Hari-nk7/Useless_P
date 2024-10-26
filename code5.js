gdjs.mazeCode = {};
gdjs.mazeCode.localVariables = [];
gdjs.mazeCode.GDWallObjects1= [];
gdjs.mazeCode.GDWallObjects2= [];
gdjs.mazeCode.GDNewPanelSpriteObjects1= [];
gdjs.mazeCode.GDNewPanelSpriteObjects2= [];
gdjs.mazeCode.GDPlayerObjects1= [];
gdjs.mazeCode.GDPlayerObjects2= [];
gdjs.mazeCode.GDbg6Objects1= [];
gdjs.mazeCode.GDbg6Objects2= [];
gdjs.mazeCode.GDexitObjects1= [];
gdjs.mazeCode.GDexitObjects2= [];
gdjs.mazeCode.GDNewPanelSprite2Objects1= [];
gdjs.mazeCode.GDNewPanelSprite2Objects2= [];
gdjs.mazeCode.GDNewSpriteObjects1= [];
gdjs.mazeCode.GDNewSpriteObjects2= [];


gdjs.mazeCode.userFunc0xb17730 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Check if the left arrow key is pressed
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left")) {
    // Get the Player object
    const player = runtimeScene.getObjects("Player")[0];
    
    // Move Player left by -5 pixels
    player.setX(player.getX() - 5);
    
    // Check collision with the Walls group
    const walls = runtimeScene.getObjects("Walls");
    if (gdjs.evtTools.object.hitBoxesCollisionTest([player], walls, false, runtimeScene, false)) {
        // Undo movement if collision detected
        player.setX(player.getX() + 5);
    }
}

};
gdjs.mazeCode.userFunc0x828108 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Check if the right arrow key is pressed
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right")) {
    const player = runtimeScene.getObjects("Player")[0];
    
    player.setX(player.getX() + 5);
    
    const walls = runtimeScene.getObjects("Walls");
    if (gdjs.evtTools.object.hitBoxesCollisionTest([player], walls, false, runtimeScene, false)) {
        player.setX(player.getX() - 5);
    }
}

};
gdjs.mazeCode.userFunc0x828238 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Check if the up arrow key is pressed
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up")) {
    const player = runtimeScene.getObjects("Player")[0];
    
    player.setY(player.getY() - 5);
    
    const walls = runtimeScene.getObjects("Walls");
    if (gdjs.evtTools.object.hitBoxesCollisionTest([player], walls, false, runtimeScene, false)) {
        player.setY(player.getY() + 5);
    }
}

};
gdjs.mazeCode.userFunc0x8283b8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Check if the down arrow key is pressed
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down")) {
    const player = runtimeScene.getObjects("Player")[0];
    
    player.setY(player.getY() + 5);
    
    const walls = runtimeScene.getObjects("Walls");
    if (gdjs.evtTools.object.hitBoxesCollisionTest([player], walls, false, runtimeScene, false)) {
        player.setY(player.getY() - 5);
    }
}

};
gdjs.mazeCode.userFunc0x8285c0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Access the Player object
const player = runtimeScene.getObjects("Player")[0];
// Access the Walls group objects
const walls = runtimeScene.getObjects("Walls");

// Function to move player and check collision
function movePlayer(dx, dy) {
    // Save current position before moving
    const previousX = player.getX();
    const previousY = player.getY();

    // Move player
    player.setX(player.getX() + dx);
    player.setY(player.getY() + dy);

    // Check collision with walls
    if (gdjs.evtTools.object.hitBoxesCollisionTest([player], walls, false, runtimeScene, false)) {
        // Collision detected, revert to previous position
        player.setX(previousX);
        player.setY(previousY);
    }
}

// Key presses for movement
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left")) {
    movePlayer(-5, 0); // Move Left
}
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right")) {
    movePlayer(5, 0);  // Move Right
}
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up")) {
    movePlayer(0, -5); // Move Up
}
if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down")) {
    movePlayer(0, 5);  // Move Down
}

};
gdjs.mazeCode.mapOfGDgdjs_9546mazeCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.mazeCode.GDexitObjects1});
gdjs.mazeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mazeCode.userFunc0xb17730(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mazeCode.userFunc0x828108(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mazeCode.userFunc0x828238(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mazeCode.userFunc0x8283b8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mazeCode.userFunc0x8285c0(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.mazeCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mazeCode.mapOfGDgdjs_9546mazeCode_9546GDexitObjects1Objects, runtimeScene, true, false);
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

gdjs.mazeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mazeCode.GDWallObjects1.length = 0;
gdjs.mazeCode.GDWallObjects2.length = 0;
gdjs.mazeCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mazeCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mazeCode.GDPlayerObjects1.length = 0;
gdjs.mazeCode.GDPlayerObjects2.length = 0;
gdjs.mazeCode.GDbg6Objects1.length = 0;
gdjs.mazeCode.GDbg6Objects2.length = 0;
gdjs.mazeCode.GDexitObjects1.length = 0;
gdjs.mazeCode.GDexitObjects2.length = 0;
gdjs.mazeCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.mazeCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.mazeCode.GDNewSpriteObjects1.length = 0;
gdjs.mazeCode.GDNewSpriteObjects2.length = 0;

gdjs.mazeCode.eventsList0(runtimeScene);
gdjs.mazeCode.GDWallObjects1.length = 0;
gdjs.mazeCode.GDWallObjects2.length = 0;
gdjs.mazeCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mazeCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mazeCode.GDPlayerObjects1.length = 0;
gdjs.mazeCode.GDPlayerObjects2.length = 0;
gdjs.mazeCode.GDbg6Objects1.length = 0;
gdjs.mazeCode.GDbg6Objects2.length = 0;
gdjs.mazeCode.GDexitObjects1.length = 0;
gdjs.mazeCode.GDexitObjects2.length = 0;
gdjs.mazeCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.mazeCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.mazeCode.GDNewSpriteObjects1.length = 0;
gdjs.mazeCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['mazeCode'] = gdjs.mazeCode;
