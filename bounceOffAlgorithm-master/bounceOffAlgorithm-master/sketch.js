var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(800,200,20,50);
  object1.shapeColor = "purple";
  
  object2 = createSprite(400,200,50,30);
  object2.shapeColor = "purple";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1.velocityX = -5; 
}

function draw() {
  background(0,0,0);  
 
  if(isTouching(object1,object2)){
  object1.shapeColor = "white";
  object2.shapeColor = "white";
  }
  else {
    object1.shapeColor = "blue";
    object2.shapeColor = "blue";
  }

  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

