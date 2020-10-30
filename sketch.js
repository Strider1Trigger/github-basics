var monkey,monkeyi;
var ground,bg,bgimage;
var bananaGroup,si,bi;
var obstaclegroup;

function preload() {
monkeyi=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bgimage=loadImage("jungle.jpg")
  si=loadImage("stone.png")
  bi=loadImage("banana.png")
}

function setup() {
  createCanvas(400,400)
  bg=createSprite(200,200)
  bg.addImage(bgimage)
 survivalTime=0;
  bananaGroup=createGroup();
  obstaclegroup=createGroup();
 monkey = createSprite(200, 350);
monkey.addAnimation("monkey",monkeyi);

 ground = createSprite(250, 400,800,10);

monkey.scale = 0.14;
}

function draw() {
  
  background(255);
  
  bg.velocityX = -1;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(World.frameCount/World.frameRate);
  text("survival time: "+ survivalTime,100,50);
  console.log(monkey.y);
  if(keyDown("space") && monkey.y >= 352.09){
      monkey.velocityY = -12 ;
  }
  
   if (bg.x< 200){
      bg.x = bg.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  spawnFood(); 
  spawnObstacle();
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  monkey.collide(ground)
  drawSprites();
  
}

function spawnFood() {
  if(World.frameCount % 80 === 0) {
    var food = createSprite(400,380,40,10);
    food.velocityX = -6;
    food.y = random(200,270);
    food.addImage(bi);
    
    food.scale = 0.1;
    food.lifetime = 70;
    
    bananaGroup.add(food);
  }
}

function spawnObstacle() {
  if(World.frameCount % 200 === 0) {
    var stone = createSprite(400,380,10,40);
    stone.velocityX = -6;
    stone.addImage(si);
    
    stone.scale = 0.2;
    stone.lifetime = 70;
    
   obstaclegroup.add(stone);
  }
}



  
