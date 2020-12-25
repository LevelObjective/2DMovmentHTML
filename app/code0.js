gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlatformObjects1= [];
gdjs.New_32sceneCode.GDPlatformObjects2= [];
gdjs.New_32sceneCode.GDNewObject32Objects1= [];
gdjs.New_32sceneCode.GDNewObject32Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.New_32sceneCode.GDPlatformObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.New_32sceneCode.GDPlatformObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects1[i].setPosition((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("Center")),(( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("Center")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.New_32sceneCode.GDNewObject32Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject32Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject32Objects1[i].setPosition((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("Center")),(( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("Center")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Walking");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.New_32sceneCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlatformObjects1 */
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlatformObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), 0.03), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("")), 0.03), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setZOrder(1);
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
