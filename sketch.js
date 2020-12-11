
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1
  
  
  FoodGroup =  new Group();
  ObstacleGroup = new Group();
  

  
}


function draw() {
background(255);
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-5
  ground.x=ground.width/2
  console.log(ground.x)
  
   Food();
   Obstacle();
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY= monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
 
  
  
  drawSprites();
}

function Food()  {
 
  if( frameCount % 80 === 0) {
    var banana = createSprite(500,359,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
  
    banana.lifetime = 150;
  
    
    
      }
   }


function Obstacle()  {
 
  if( frameCount % 80 === 0) {
    var obstacle = createSprite(500,327,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
  
    obstacle.lifetime = 150;
  
    
    
        }

   }

