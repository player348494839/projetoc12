var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg.loadImage("path.png");
  boyImg.loadAnimation("Jake1.png",boyImg);
  boyImg.loadAnimation("Jake2.png",boyImg);
  boyImg.loadAnimation("Jake3.png",boyImg);
  boyImg.loadAnimation("Jake4.png",boyImg);
  boyImg.loadAnimation("Jake5.png",boyImg);
}

function setup(){
  
  createCanvas(400,400);
 path(300,200,60,70);
path.pathImg =addImage;
path.velocityY=2;
path.scale=1.2;

createSprite(400,400,100,100);
boy.boyImg =addImage;
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
