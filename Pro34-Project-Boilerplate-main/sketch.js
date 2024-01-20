
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopter,helicopter1
var bg,floodimage
var rope, rope1
var girl1,girl1Img
var fruit
var fruitsGroup



function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  helicopter= createSprite(200,80,100,100);
  helicopter.scale = 0.8;
  helicopter.addImage("helicopter",helicopter1)

  rope=createSprite(250,190)
rope.scale=0.4
rope.addImage("rope",rope1)

girl1=createSprite(200,500)
girl1.addImage("girl",girl1Img)
fruitsGroup=createGroup()
}
  
  
  
  function preload(){
floodimage=loadImage("flood bg.jpg")
helicopter1=loadImage("helicopter-removebg-preview (1).png")
rope1=loadImage("rope-removebg-preview.png")
girl1Img=loadImage("girl2.png")
  
}


function draw() 
{
 
  background(floodimage);
  Engine.update(engine);
  drawSprites()
  if(keyDown("left")){
    helicopter.x=helicopter.x-5
    
  }
rope.x=helicopter.x
  if(keyDown("right")){
    helicopter.x=helicopter.x+5
  }

  if(helicopter.x>700){
    helicopter.x=700
  }
  if(helicopter.x<100){
helicopter.x=100
  }
  if(keyDown("space")){
    fruit=createSprite(rope.x,rope.y)
fruit.x=rope.x
  }

  
}
function fruits(){

fruit=createSprite(rope.x,rope.y)
fruit.x=rope.x
fruitsGroup.add(fruit)
  
}
