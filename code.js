var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var limite1=createSprite(200,120,400,5);
var limite2=createSprite(200,260,400,5);
var Sam=createSprite(20,190,13,13);
Sam.shapeColor="green";
var vidas=0;
var carro1=createSprite(100,130,10,10);
carro1.shapeColor="red";
carro1.velocityY=8;
var carro2=createSprite(215,130,10,10);
carro2.shapeColor="red";
carro2.velocityY=8;
var carro3=createSprite(165,250,10,10);
carro3.shapeColor="red";
carro3.velocityY=-8;
var carro4=createSprite(270,250,10,10);
carro4.shapeColor="red";
carro4.velocityY=-8;


function draw() {
  background("white");
  text("Vidas: " + vidas,200,100);
  strokeWeight(0); 
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
carro1.bounceOff(limite1);
carro1.bounceOff(limite2);
carro2.bounceOff(limite1);
carro2.bounceOff(limite2);
carro3.bounceOff(limite1);
carro3.bounceOff(limite2);
carro4.bounceOff(limite1);
carro4.bounceOff(limite2);
if (keyDown("right")) {
  Sam.x=Sam.x+2;
}
if (keyDown("left")) {
 Sam.x=Sam.x-2;  
}
if (Sam.isTouching(carro1)
|| Sam.isTouching(carro2)
|| Sam.isTouching(carro3)
|| Sam.isTouching(carro4)
) {
Sam.x=20;
Sam.y=190;
vidas=vidas+1;
}










  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
