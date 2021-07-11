var castle,invisible1
var coins = 0
var gameState = "start";
var roadGrp,obstacleGrp,horseGrp;
var s1,s2,s3,s4,s5;
var pressed = 0;
var roadImg;
var healthH1 = 10
var healthH2 = 5
var healthH3 = 10
var healthC = 10

var posX =525;
var posY =155;
var scale = 0.5;
var s="s"
var test=""
//var k
var horse_x_pos=1300
var rockLife = 0;
var treeLife = 0;
var speed = 10
var towerLife = 100;
var level = 1;
var horse1;
var enemyNum = 5;
var archerArray = [];
var towerArray = [];

var selectDef=""

function preload(){
casImg = loadImage("Images/castle.png")
treeImg1 = loadImage("Images/tree.png")
rockImg1 = loadImage("Images/rock.png")
forest1 = loadImage("Images/forest.png")
water = loadAnimation("Images/pond3.png","Images/pond2.png","Images/pond1.png","Images/pond3.png","Images/pond1.png","Images/pond2.png")
horseImg = loadAnimation("Images/horse1.png","Images/horse2.png","Images/horse3.png","Images/horse2.png")
sTree1 = loadImage("Images/stree1.png")
sTree3 = loadImage("Images/stree2.png")
sHouse = loadImage("Images/house.png")
House3 = loadImage("Images/house3.png")
bannerImg = loadImage("Images/banner.png")
archerImg = loadImage("Images/ARCHER_QUEEN.png")
towerImg = loadImage("Images/tower.png")
archerBlack = loadImage("Images/ARCHER_QUEEN1_BL.png")
towerBlack = loadImage("Images/ARCHER_QUEEN_BL.png")
horseUp = loadAnimation("Images/horseback.png")
horseDown = loadAnimation("Images/horse2f.png","Images/horsef.png")
h10 = loadAnimation("Images/newHBar/11.png")
h9 = loadAnimation("Images/newHBar/10.png")
h8 = loadAnimation("Images/newHBar/9.png")
h7 = loadAnimation("Images/newHBar/8.png")
h6 = loadAnimation("Images/newHBar/7.png")
h5 = loadAnimation("Images/newHBar/6.png")
h4 = loadAnimation("Images/newHBar/5.png")
h3 = loadAnimation("Images/newHBar/4.png")
h2 = loadAnimation("Images/newHBar/3.png")
h1 = loadAnimation("Images/newHBar/2.png")
h0 = loadAnimation("Images/newHBar/1.png")
}

function setup() {
  createCanvas(1300,575);

  pond = createSprite(300,450,50,50)
  pond.addAnimation("animation",water)
  pond.scale = 0.6

  createRoad();

  invisible1 = createSprite(745,360,2,75)
  invisible1.shapeColor = "black"  
  
  invisible2 = createSprite(780,75,75,2)
  invisible2.shapeColor = "black"  

  invisible3 = createSprite(460,100,2,75)
  invisible3.shapeColor = "black"  
   
  invisible4 = createSprite(480,550,75,2)
  invisible4.shapeColor = "black"  

  roadGrp = new Group();
  treeGrp = new Group();
  horseGrp = new Group();

  banner=createSprite(1130,500,50,50)
  banner.addImage(bannerImg)
  banner.scale=0.25

  archer = createSprite(1220,500)
  archer.scale = 0.5;

  tower = createSprite(1160,505)
  tower.scale = 0.25

  
  s1=new Enemies(1300,370,20,20,horseImg,20,-7,0,0.25) 
  s2=new Enemies(1400,370,20,20,horseImg,20,-7,0,0.25) 
  s3=new Enemies(1500,370,20,20,horseImg,20,-7,0,0.25)
  s1.army.addAnimation("up",horseUp) 
  s2.army.addAnimation("up",horseUp) 
  s3.army.addAnimation("up",horseUp) 
  
  s1.army.addAnimation("down",horseDown) 
  s2.army.addAnimation("down",horseDown) 
  s3.army.addAnimation("down",horseDown) 

  if(gameState === "start"){
  healthC = 10;
  }

}

function draw() {
  background	(152,251,152);  
  drawSprites();

  if(gameState === "start"){
    createNonTrees();
    createArmy();
    Stage1();
   coins = 100 
  }
   
  changeDirection(s1,invisible1,0,-7,"up",horseUp)
  changeDirection(s2,invisible1,0,-7,"up",horseUp)
  changeDirection(s3,invisible1,0,-7,"up",horseUp)

  changeDirection(s1,invisible2,-7,0,"left",horseImg)
  changeDirection(s2,invisible2,-7,0,"left",horseImg)
  changeDirection(s3,invisible2,-7,0,"left",horseImg)

  changeDirection(s1,invisible3,0,7,"down",horseDown)
  changeDirection(s2,invisible3,0,7,"down",horseDown)
  changeDirection(s3,invisible3,0,7,"down",horseDown)

  changeDirection(s1,invisible4,-7,0,"left",horseImg)
  changeDirection(s2,invisible4,-7,0,"left",horseImg)
  changeDirection(s3,invisible4,-7,0,"left",horseImg)

//  healthBar(s2,healthH2,20,50,0.25)
//  healthBar(s2,healthH3,20,1)

  if(coins>=20){
    tower.addImage(towerImg)
    }else{
      tower.addImage(towerBlack)
    }

  if(coins>=5){
    archer.addImage(archerImg)
    }else{
      archer.addImage(archerBlack)
    }

    if(s1.army.isTouching(castle)){
      healthC = healthC-1;
      s1.army.destroy();
    }
     if(s2.army.isTouching(castle)){
      healthC = healthC-1;
      s2.army.destroy();
    }
    if(s3.army.isTouching(castle)){
      healthC = healthC-1;
      s3.army.destroy();
    }

    healthBar(castle,healthC,30,70,0.25)


  fill("red");
  text(mouseX+','+mouseY,mouseX,mouseY)

  fill("WHITE")
  textSize(15)
  text(coins,1054,468)

  fill("WHITE")
  textSize(15)
  text(towerLife,1054,505)

  fill("WHITE")
  textSize(15)
  text(level,1054,543)
}


function Stage1(){
  treeLife = 50;
  rockLife = 100;
//roght of road 5
 tree1 = new obstacle(posX,posY,50,50,treeImg1,0.12,treeLife,"t1")
 tree2 = new obstacle(posX,posY+50,50,50,treeImg1,0.12,treeLife,"t2")
 tree3 = new obstacle(posX,posY+100,50,50,treeImg1,0.12,treeLife,"t3")
 tree4 = new obstacle(posX,posY+300,50,50,treeImg1,0.12,treeLife,"t4")
 tree5 = new obstacle(posX,posY+365,50,50,treeImg1,0.12,treeLife,"t5")
 //left of road5
 tree6 = new obstacle(posX-80,posY+50,50,50,treeImg1,0.12,treeLife,"t6")
 tree4 = new obstacle(posX-80,posY+300,50,50,treeImg1,0.12,treeLife,"t7")

 //right of road5
 rock1 = new obstacle(posX,posY+200,50,50,rockImg1,0.27,rockLife,"r1")
 //left of road5
 rock2 = new obstacle(posX-80,posY,50,50,rockImg1,0.27,rockLife,"r2",)
 rock3 = new obstacle(posX-80,posY+100,50,50,rockImg1,0.27,rockLife,"r3")
 rock4 = new obstacle(posX-80,posY+200,50,50,rockImg1,0.27,rockLife,"r4")

 tree5 = new obstacle(posX+200,posY+120,50,50,treeImg1,0.12,treeLife,"t8")
 tree6 = new obstacle(posX+200,posY+180,50,50,treeImg1,0.12,treeLife,"t9")
 rock7 = new obstacle(posX+200,posY+233,50,50,rockImg1,0.27,rockLife,"r5")
 rock8 = new obstacle(posX+200,posY+53,50,50,rockImg1,0.27,rockLife,"r6")
 tree8 = new obstacle(posX+260,posY+273,50,50,treeImg1,0.12,treeLife,"t6")

}

function createNonTrees(){
 createForest(220,75,75,50,sTree1,0.3,75,75)
 createForest(220,50,20,90,sHouse,0.17,75,75)
 createForest(220,50,620,500,sHouse,0.17,75,75)
 createForest(200,50,950,230,sTree3,0.25,75,50)
 createForest(200,50,70,300,sTree3,0.25,75,50)
 createForest(200,50,25,340,House3,0.15,75,50)
 createForest(200,50,875,275,House3,0.15,75,50)

}

function createForest(endNumx,endNumy,iposX,iposY,image,scale,varX,varY){
  for(var i =0; i < endNumx; i = i+varX){
    for(var z = 0; z < endNumy; z = z+varY ){
    object = new obstacle(iposX+2*i,iposY+2*z,100,100,image,scale,treeLife,"gp1")
  }
}
}

function createArmy(){
  if(mousePressedOver(archer)&&coins>=5){
      pressed = 1;
      selectDef ="Arch"
  }

  if(pressed===1){
  imageMode(CENTER)
  image(archerImg,mouseX,mouseY,75,75)
  }

  if(mousePressedOver(tower)&&coins>=15){
    pressed = 2;
    selectDef = "Tower"
}
    if(pressed===2){
    image(towerImg,mouseX,mouseY,75,75)
}
}

function createRoad(){
  road1 = new Road(1040,385,550,30)
  road2 = new Road(765,250,30,300)
  road3 = new Road(620,115,300,30)
  road4 = new Road(485,325,30,400)
  road5 = new Road(305,540,390,30)

  castle = createSprite(130,460,50,50)
  castle.addImage(casImg)
  castle.scale = 0.6;
}

function changeDirection(object,obstacle,velX,velY,str,image){
  if(object.army.isTouching(obstacle)){
    object.army.velocityX=velX
    object.army.velocityY=velY
    object.army.changeAnimation(str,image)
  }
}

function mouseClicked(){
if(selectDef==="Tower"&&coins>=15){
  create(towerImg,towerArray)
}else if(selectDef==="Arch"&&coins>=5){
  create(archerImg,archerArray)
}
}

function create(image,Array1){
  var arch= createSprite(mouseX,mouseY,10,10)
  arch.addImage(image)
  arch.scale = 0.7
  var position=[arch.x,arch.y]
  Array1.push(position)
  pressed = 0;
}

function healthBar(sprite,health,upX,upY,scale){
  healthSprite = createSprite(sprite.x+upX,sprite.y-upY)
  healthSprite.velocityX = sprite.velocityX;
  healthSprite.velocityY = sprite.velocityY;
  healthSprite.scale = scale
  healthSprite.addAnimation("10",h10)
  healthSprite.addAnimation("9",h9)
  healthSprite.addAnimation("8",h8)
  healthSprite.addAnimation("7",h7)
  healthSprite.addAnimation("6",h6)
  healthSprite.addAnimation("5",h5)
  healthSprite.addAnimation("4",h4)
  healthSprite.addAnimation("3",h3)
  healthSprite.addAnimation("2",h2)
  healthSprite.addAnimation("1",h1)
  healthSprite.addAnimation("0",h0)
  if(health===10){
    healthSprite.changeAnimation("10",h10)
  }else if(health===9){
    healthSprite.changeAnimation("9",h9);
  }else if(health===8){
    healthSprite.changeAnimation("8",h8);
  }else if(health===7){
    healthSprite.changeAnimation("7",h7);
  }else if(health===6){
    healthSprite.changeAnimation("6",h6);
  }else if(health===5){
    healthSprite.changeAnimation("5",h5);
  }else if(health===4){
    healthSprite.changeAnimation("4",h4);
  }else if(health===3){
    healthSprite.changeAnimation("3",h3);
  }else if(health===2){
    healthSprite.changeAnimation("2",h2);
  }else if(health===1){
    healthSprite.changeAnimation("1",h1);
  }else if(health===0){
    healthSprite.changeAnimation("0",h0);
  }
}

