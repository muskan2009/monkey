
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var background1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(40,340,30,30);
  monkey.addAnimation("fool",monkey_running);
  monkey.scale = 0.1;
  
background1 = createSprite(200,370,600,10);
  background1.velocityX = -4;
  
}


function draw() {
  
  background('white');
  
  if(background1.x<background1.width/2){
    background1.x = 200;
  }
    
  spawnObstacle();
  spawnBanana();
obstacleGroup = new Group();  
FoodGroup = new Group();  

  score=Math.ceil(frameCount/frameRate()); text("Survival Time: "+ score, 100,50);

  monkey.velocityY = 2;
  monkey.collide(background1);
  
    if(keyDown("space") ) {
      monkey.velocityY = -12; 
    }
      monkey.velocityY = monkey.velocityY + 0.9
 
drawSprites();
  
}

function spawnObstacle(){
  if(frameCount% 200===0){
obstacle = createSprite(430,350,30,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.09;
  obstacle.velocityX = -4;
  obstacle.x = Math.round(random(400,450));
obstacleGroup.add(obstacle);
  }
}

function spawnBanana(){
  if(frameCount% 200 === 0){
   banana = createSprite(440,250,5,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -(4+3*frameCount%40);
  banana.x = Math.round(random(400,450));
FoodGroup.add(banana);  }  
  
  
}