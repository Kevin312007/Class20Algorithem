var movingRect,fixedRect

function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,80,50)
}

function draw() {
  background(0,0,0); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="purple"
    fixedRect.shapeColor="blue"
  }
  else{movingRect.shapeColor="green"
  fixedRect.shapeColor="red"

  }
  drawSprites();
}