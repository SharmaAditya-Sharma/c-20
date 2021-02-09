var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
movingRect.debug = true;

fixedRect = createSprite(300,100,70,60);
fixedRect.shapeColor = "green";
fixedRect.debug = true;

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x - movingRect.x< movingRect.width/2 + fixedRect.width/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  &&fixedRect.y - movingRect.y< movingRect.height/2 +fixedRect.height/2){
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";

}
else{
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";

}
  drawSprites();
} 