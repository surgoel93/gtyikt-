var fixedRect, movingRect;

var box1, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(100,100,50,50);
  box1.shapeColor = "green";

  box2 = createSprite(200,100,50,50);
  box2.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  box1.x = World.mouseX;
  box1.y = World.mouseY;

 if(isTouching(box2,box1)){
  box1.shapeColor = "blue";
  box2.shapeColor = "blue";

  

 }
 else {
  box1.shapeColor = "green";
  box2.shapeColor = "green";

 }
  drawSprites();
}

