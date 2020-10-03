
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score



var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(35,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  

  
}


function draw() {
  background("white");
 if(keyDown("space") && monkey.y >= 180) {
    monkey.velocityY= -14;
    }
 monkey.velocityY=monkey.velocityY + 0.8;
  
  if (ground.x< 0){
    ground.x = ground.width/2;
  }
  
  food();
  obstacle();
  
  stroke("white");
  textSize(20)
  fill("white")
  text("Score: "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100,50);
  
  monkey.collide(ground);  
  drawSprites();
}

function food() {
  if (World.frameCount % 80 === 0) {
  banana =createSprite(400,100,40,10)
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale =0.1;
    
  banana.velocityX=-6;
  banana.lifetime= 134;
  bananaGroup.add(banana);
  }
}

function obstacle() {
  if (World.frameCount % 300 === 0) {
 var obstacle=createSprite(400,325,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale =0.1;
    
  obstacle.velocityX=-6;
  obstacle.lifetime=70;
  obstacleGroup.add(obstacle);
  }
   }