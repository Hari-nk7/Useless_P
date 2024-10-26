gdjs.ball_32gameCode = {};
gdjs.ball_32gameCode.localVariables = [];
gdjs.ball_32gameCode.GDNewSpriteObjects1= [];
gdjs.ball_32gameCode.GDNewSpriteObjects2= [];
gdjs.ball_32gameCode.GDNewSprite2Objects1= [];
gdjs.ball_32gameCode.GDNewSprite2Objects2= [];
gdjs.ball_32gameCode.GDbg5Objects1= [];
gdjs.ball_32gameCode.GDbg5Objects2= [];
gdjs.ball_32gameCode.GDexitObjects1= [];
gdjs.ball_32gameCode.GDexitObjects2= [];
gdjs.ball_32gameCode.GDNewSprite3Objects1= [];
gdjs.ball_32gameCode.GDNewSprite3Objects2= [];


gdjs.ball_32gameCode.userFunc0x8276b0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Get the sprite object and update its position to the mouse coordinates
const sprite = runtimeScene.getObjects("NewSprite")[0];  // Replace 'YourSpriteName' with the name of your sprite
const mouseX = runtimeScene.getGame().getInputManager().getMouseX();
const mouseY = runtimeScene.getGame().getInputManager().getMouseY();

sprite.setPosition(mouseX, mouseY);

};
gdjs.ball_32gameCode.userFunc0x827848 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Get the sprite (NewSprite2) and cursor (NewSprite) objects
const sprite = runtimeScene.getObjects("NewSprite2")[0];  // Your main sprite
const cursor = runtimeScene.getObjects("NewSprite")[0];   // The cursor sprite

// Get the position of both sprites
const cursorX = cursor.getX();
const cursorY = cursor.getY();
const spriteX = sprite.getX();
const spriteY = sprite.getY();

// Calculate the distance between NewSprite2 and the cursor (NewSprite)
const distance = Math.sqrt((cursorX - spriteX) * (cursorX - spriteX) + (cursorY - spriteY) * (cursorY - spriteY));

// Define the threshold distance (e.g., 100 pixels)
const threshold = 100;

// If the cursor is close enough, move NewSprite2 away
if (distance < threshold) {
    // Calculate the angle from NewSprite2 to the cursor
    const angleToCursor = Math.atan2(cursorY - spriteY, cursorX - spriteX) * (180 / Math.PI);

    // Calculate the angle to move away by adding 180 degrees to the angle
    const moveAngle = angleToCursor + 180;

    // Convert the angle to radians for trigonometric functions
    const radians = moveAngle * (Math.PI / 180);

    // Define the speed of movement
    const speed = 200;

    // Calculate the movement in x and y directions
    const moveX = Math.cos(radians) * speed * runtimeScene.getElapsedTime() / 1000;  // Using time delta
    const moveY = Math.sin(radians) * speed * runtimeScene.getElapsedTime() / 1000;

    // Update the position of NewSprite2 to move away from the cursor
    sprite.setX(spriteX + moveX);
    sprite.setY(spriteY + moveY);
}

};
gdjs.ball_32gameCode.userFunc0x8279c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Hide the default system cursor
runtimeScene.getGame().getRenderer().getCanvas().style.cursor = "none";

// Ensure the CustomCursor object follows the mouse
const customCursor = runtimeScene.getObjects("CustomCursor")[0];  // Replace with the exact name of your cursor sprite

// Update the custom cursor's position to follow the mouse
if (customCursor) {
    const mouseX = runtimeScene.getGame().getInputManager().getMouseX();
    const mouseY = runtimeScene.getGame().getInputManager().getMouseY();
    customCursor.setPosition(mouseX, mouseY);
}

};
gdjs.ball_32gameCode.mapOfGDgdjs_9546ball_959532gameCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.ball_32gameCode.GDexitObjects1});
gdjs.ball_32gameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.ball_32gameCode.userFunc0x8276b0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.ball_32gameCode.userFunc0x827848(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.ball_32gameCode.userFunc0x8279c8(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.ball_32gameCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ball_32gameCode.mapOfGDgdjs_9546ball_959532gameCode_9546GDexitObjects1Objects, runtimeScene, true, false);
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

gdjs.ball_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ball_32gameCode.GDNewSpriteObjects1.length = 0;
gdjs.ball_32gameCode.GDNewSpriteObjects2.length = 0;
gdjs.ball_32gameCode.GDNewSprite2Objects1.length = 0;
gdjs.ball_32gameCode.GDNewSprite2Objects2.length = 0;
gdjs.ball_32gameCode.GDbg5Objects1.length = 0;
gdjs.ball_32gameCode.GDbg5Objects2.length = 0;
gdjs.ball_32gameCode.GDexitObjects1.length = 0;
gdjs.ball_32gameCode.GDexitObjects2.length = 0;
gdjs.ball_32gameCode.GDNewSprite3Objects1.length = 0;
gdjs.ball_32gameCode.GDNewSprite3Objects2.length = 0;

gdjs.ball_32gameCode.eventsList0(runtimeScene);
gdjs.ball_32gameCode.GDNewSpriteObjects1.length = 0;
gdjs.ball_32gameCode.GDNewSpriteObjects2.length = 0;
gdjs.ball_32gameCode.GDNewSprite2Objects1.length = 0;
gdjs.ball_32gameCode.GDNewSprite2Objects2.length = 0;
gdjs.ball_32gameCode.GDbg5Objects1.length = 0;
gdjs.ball_32gameCode.GDbg5Objects2.length = 0;
gdjs.ball_32gameCode.GDexitObjects1.length = 0;
gdjs.ball_32gameCode.GDexitObjects2.length = 0;
gdjs.ball_32gameCode.GDNewSprite3Objects1.length = 0;
gdjs.ball_32gameCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['ball_32gameCode'] = gdjs.ball_32gameCode;
