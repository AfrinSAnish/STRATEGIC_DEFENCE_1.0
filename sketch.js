var castle,invisible1
var coins = 0
var gameState = "start";
var roadGrp,obstGrp;
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
var level = 1;
var horse1;
var enemyNum = 5;
var archerArray = [];
var towerArray = [];

var id= 0
var tower_id

var selectDef=""
var tower_type="A"

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
h10 = loadImage("Images/newHBar/11.png")
h9 = loadImage("Images/newHBar/10.png")
h8 = loadImage("Images/newHBar/9.png")
h7 = loadImage("Images/newHBar/8.png")
h6 = loadImage("Images/newHBar/7.png")
h5 = loadImage("Images/newHBar/6.png")
h4 = loadImage("Images/newHBar/5.png")
h3 = loadImage("Images/newHBar/4.png")
h2 = loadImage("Images/newHBar/3.png")
h1 = loadImage("Images/newHBar/2.png")
h0 = loadImage("Images/newHBar/1.png")

arrow_l = loadImage("Images/arrow_l.png")
arrow_r = loadImage("Images/arrow_r.png")
arrow_u = loadImage("Images/archer_u.png")
arrow_d = loadImage("Images/arrow_d.png")
}

function setup() {
  createCanvas(1300,575);

  roadGrp = new Group();
  obstGrp = new Group();

  pond = createSprite(300,450,50,50)
  pond.addAnimation("animation",water)
  pond.scale = 0.4

  createRoad();

  invisible1 = createSprite(745,360,2,75)
  invisible1.shapeColor = "black"  
  invisible1.visible = false;
  
  invisible2 = createSprite(780,75,75,2)
  invisible2.shapeColor = "black"  
  invisible2.visible = false;

  invisible3 = createSprite(460,100,2,75)
  invisible3.shapeColor = "black"  
  invisible3.visible = false;
   
  invisible4 = createSprite(480,550,75,2)
  invisible4.shapeColor = "black"  
  invisible4.visible = false;

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

  hlth1=new Enemies(1300,340,20,20,h10,20,-7,0,0.2)
  hlth2=new Enemies(1400,340,20,20,h10,20,-7,0,0.2)
  hlth3=new Enemies(1500,340,20,20,h10,20,-7,0,0.2)
  //healthBar(s1,healthH1,30,70,0.25)
 // s1Health = createSprite(1300,300,20,20)
  //Change(s1Health,healthH1)
 // s1Health.scale = 0.25
 // s1Health.ve
  
  
  s1.army.addAnimation("up",horseUp) 
  s2.army.addAnimation("up",horseUp) 
  s3.army.addAnimation("up",horseUp) 
  
  s1.army.addAnimation("down",horseDown) 
  s2.army.addAnimation("down",horseDown) 
  s3.army.addAnimation("down",horseDown) 

  if(gameState === "start"){
  healthC = 10;
  Stage1();
  coins = 100 
  }

}

function draw() {
  background	(152,251,152);  
  drawSprites();

  if(gameState === "start"){
    createNonTrees();
    createArmy();

  }

  console.log(id)
  console.log(tower_type)
   
  changeDirection(s1,invisible1,0,-7,"up",horseUp,hlth1)
  changeDirection(s2,invisible1,0,-7,"up",horseUp,hlth2)
  changeDirection(s3,invisible1,0,-7,"up",horseUp,hlth3)

  changeDirection(s1,invisible2,-7,0,"left",horseImg,hlth1)
  changeDirection(s2,invisible2,-7,0,"left",horseImg,hlth2)
  changeDirection(s3,invisible2,-7,0,"left",horseImg,hlth3)

  changeDirection(s1,invisible3,0,7,"down",horseDown,hlth1)
  changeDirection(s2,invisible3,0,7,"down",horseDown,hlth2)
  changeDirection(s3,invisible3,0,7,"down",horseDown,hlth3)

  changeDirection(s1,invisible4,-7,0,"left",horseImg,hlth1)
  changeDirection(s2,invisible4,-7,0,"left",horseImg,hlth2)
  changeDirection(s3,invisible4,-7,0,"left",horseImg,hlth3)

//  healthBar(s2,healthH2,20,50,0.25)
//  healthBar(s2,healthH3,20,1)

  if(coins>=5){
    tower.addImage(towerImg)
    }else{
      tower.addImage(towerBlack)
    }

  if(coins>=15){
    archer.addImage(archerImg)
    }else{
      archer.addImage(archerBlack)
    }

    if(s1.army.isTouching(castle)){
      healthC = healthC-1;
      s1.army.destroy();
      hlth1.army.destroy();
     // castleP
    }
     if(s2.army.isTouching(castle)){
      healthC = healthC-1;
      s2.army.destroy();
      hlth2.army.destroy();
    }
    if(s3.army.isTouching(castle)){
      healthC = healthC-1;
      s3.army.destroy();
      hlth3.army.destroy();
    }

    healthBar(castle,healthC,-20,80,0.25)
    //healthBar(s1,healthH1,30,70,0.25)

   // healthBar(s1,healthH1,30,70,0.25)
  //  image(h10,s1.x,s1.y,75,75)


  fill("red");
  text(mouseX+','+mouseY,mouseX,mouseY)

  fill("WHITE")
  textSize(15)
  text(coins,1054,468)

  fill("WHITE")
  textSize(15)
  text(healthC,1054,505)

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
 createForest(220,75,75,50,sTree1,0.13,75,75)
 createForest(220,50,20,90,sHouse,0.17,75,75)
 createForest(220,50,840,90,House3,0.37,75,75)
 createForest(220,50,900,65,sTree1,0.13,75,75)
 createForest(220,50,620,530,sHouse,0.17,75,75)
 createForest(200,50,950,230,sTree1,0.15,75,50)
 createForest(200,50,70,250,sTree1,0.15,75,50)
 createForest(200,50,25,300,House3,0.35,75,50)
 createForest(200,50,875,275,House3,0.35,75,50)

}

function createForest(endNumx,endNumy,iposX,iposY,image,scale,varX,varY){
  for(var i =0; i < endNumx; i = i+varX){
    for(var z = 0; z < endNumy; z = z+varY ){
    object = new obstacle(iposX+2*i,iposY+2*z,100,100,image,scale,treeLife,"gp1")
  }
}
}

function createArmy(){
  if(mousePressedOver(archer)&&coins>=15){
      pressed = 1;
      selectDef ="Arch"
  }

  if(pressed===1){
  imageMode(CENTER)
  image(archerImg,mouseX,mouseY,75,105)
  }

  if(mousePressedOver(tower)&&coins>=5){
    pressed = 2;
    selectDef = "Tower"
}
    if(pressed===2){
    image(towerImg,mouseX,mouseY,45,90)
}
}

function createRoad(){
  road1 = new Road(1040,385,550,30,roadGrp)
  road2 = new Road(765,250,30,300,roadGrp)
  road3 = new Road(620,115,300,30,roadGrp)
  road4 = new Road(485,325,30,400,roadGrp)
  road5 = new Road(305,540,390,30,roadGrp)

  castle = createSprite(130,520,50,50)
  castle.addImage(casImg)
  castle.scale = 0.4;
}

function changeDirection(object,obstacle,velX,velY,str,image,bar){
  if(object.army.isTouching(obstacle)){
    object.army.velocityX=velX
    object.army.velocityY=velY
    object.army.changeAnimation(str,image)
    bar.army.velocityX = object.army.velocityX;
    bar.army.velocityY = object.army.velocityY;
  }
}

function mouseClicked(){
if(selectDef==="Tower"&&coins>=15){
  create(towerImg,towerArray,0.25)
  tower_type = "A" + id
  coins = coins - 5
  var position=[mouseX,mouseY]
  towerArray.push(position)

}else if(selectDef==="Arch"&&coins>=5){
  create(archerImg,archerArray,0.35)
  tower_type = "B" + id
  coins = coins - 5
  var position=[mouseX,mouseY]
  archerArray.push(position)
}

}

function create(image,Array1,scale){
  if(mouseX>990&&mouseY>440){
   // return false;
  }else{
  var arch= createSprite(mouseX,mouseY,10,10)
  id++
 tower_id = "Tower"+id
 tower_id = createSprite(mouseX,mouseY,200,200)

 tower_id.visible = false;
  
 // if(tower_id.isTouching(s1)||tower_id.isTouching(s2)||tower_id.isTouching(s3)){
    spawnArrows();
 // }
  
  if(arch.isTouching(obstGrp)||arch.isTouching(roadGrp)){
    arch.destroy();
  //  invisible1.destroy();
  }else{
  arch.addImage(image)
 // 
  arch.scale = scale;
  var position=[arch.x,arch.y]
  Array1.push(position)
  pressed = 0;
}
  }
}

function healthBar(sprite,health,upX,upY,scale){
  healthSprite = createSprite(sprite.x+upX,sprite.y-upY)
  healthSprite.scale = scale
  if(health===10){
    healthSprite.addImage("10",h10)
  }else if(health===9){
    healthSprite.addImage("9",h9);
  }else if(health===8){
    healthSprite.addImage("8",h8);
  }else if(health===7){
    healthSprite.addImage("7",h7);
  }else if(health===6){
    healthSprite.addImage("6",h6);
  }else if(health===5){
    healthSprite.addImage("5",h5);
  }else if(health===4){
    healthSprite.addImage("4",h4);
  }else if(health===3){
    healthSprite.addImage("3",h3);
  }else if(health===2){
    healthSprite.addImage("2",h2);
  }else if(health===1){
    healthSprite.addImage("1",h1);
  }else if(health===0){
    healthSprite.addImage("0",h0);
  }
}

function Change(sprite,health){
  if(health===10){
    sprite.addImage("10",h10)
  }else if(health===9){
    sprite.addImage("9",h9);
  }else if(health===8){
    sprite.addImage("8",h8);
  }else if(health===7){
    sprite.addImage("7",h7);
  }else if(health===6){
    sprite.addImage("6",h6);
  }else if(health===5){
    sprite.addImage("5",h5);
  }else if(health===4){
    sprite.addImage("4",h4);
  }else if(health===3){
    sprite.addImage("3",h3);
  }else if(health===2){
    sprite.addImage("2",h2);
  }else if(health===1){
    sprite.addImage("1",h1);
  }else if(health===0){
    sprite.addImage("0",h0);
  }
}

function spawnArrows(){
 if(frameCount%1===0){
  for(var i=0;i<towerArray.length;i++){
    var arrow=createSprite(towerArray[i][0],towerArray[i][1],30,10)
    arrow.addImage(arrow_l)
    arrow.scale=0.3
    arrow.lifetime=200

   // if(arrow.x-)
    arrow.velocityX=9


  }
}
}

