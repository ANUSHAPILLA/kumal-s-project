
var canvas;
var space, backgroundImage, rocketpic, asteroidpic, marspic;

function preload(){
   backgroundImage = loadImage("background2.jpeg");
   rocketpic = loadImage("rocket.jpg");
   marspic = loadImage("mars.png");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  space = createSprite(1020, -400, windowWidth, windowHeight);

  space.addImage(backgroundImage);
  
}

function draw() {
  
  background(180);
  //displaying score
    
    if (space.y > 600){
      space.y = 100;
    }
    space.velocityY = 5;
    
    //jump when the space key is pressed
  
  drawSprites();
}


