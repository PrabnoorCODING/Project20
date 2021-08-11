var astronaut;
var sleeping,brushing,gyming,bathing;
var moving;
var eating;
var bg;

function preload(){

  sleep =  loadAnimation("sleep.png")
  brush =  loadAnimation("brush.png")
  gym   =  loadAnimation("gym1.png","gym2.png")
  move  =  loadAnimation("move.png")
  eat   =  loadAnimation("eat1.png","eat2.png")
  bath  =  loadAnimation("bath1.png","bath2.png");
  bg    =  loadImage("iss.png")
}


function setup() {
  createCanvas(1000,500);
  createSprite(400, 200, 50, 50);
  

  
}

function draw() {
  background(255,255,255);  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming", gym);
  astronaut.changeAnimation("gyming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("M_KEY")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 3;
  astronaut.velocityY = 3;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 3;
  astronaut.velocityY = 3;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 3;
  astronaut.velocityY = 3;
}


}