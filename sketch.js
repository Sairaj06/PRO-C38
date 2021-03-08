var PLAY = 1;
var END = 0;
var gameState = PLAY;

var obstacle, obstacleImage, cycleImg;
var obstacleGroup;

function preload(){
  cycleImg = loadImage("cycle.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800,400);
  
  cycle = createSprite(80,200,20,20);
  cycle.addImage(cycleImg);
  cycle.scale = 0.07;
  
  ground = createSprite(400,300,9000,10);
  ground.shapeColor = "brown";
  ground.velocityX = -4;
  ground.visible = true;
  ground.x = ground.width/2;
  
  obstaclesGroup = createGroup();   
}

function draw() {
  background("lightblue");
  if(gameState === PLAY){

    stroke("black");
    textSize(20);
    fill("white");
    text("Press SPACE to jump over obstacles", 250, 20);

    if(ground.x < 0){
      ground.x = 200;
    }

    if(keyDown("space")){
      cycle.velocityY = - 12;
    } 

    spawnObstacles();
    
    camera.position.x = displayWidth/4;
    camera.position.y = 180;
    
    cycle.velocityY = cycle.velocityY + 0.8;
    cycle.collide(ground);
  
    drawSprites();
  }
}

function spawnObstacles()
{
  if(camera.position.x % 80 === 0)
  {
    obstacle = createSprite(800,280,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstaclesGroup.add(obstacle);
  }

  if(World.frameCount % 150 === 0)
  {
    obstacle = createSprite(800,280,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstaclesGroup.add(obstacle);
  }
} 