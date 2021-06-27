var castle,invisible1
var coins = 0
var gameState = "start";
var roadGrp,obstacleGrp,horseGrp;
var s1,s2,s3,s4,s5;

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
var enemyArray = [];

function preload(){
casImg = loadImage("images/castle.png")
treeImg1 = loadImage("images/tree.png")
rockImg1 = loadImage("images/rock.png")
forest1 = loadImage("images/forest.png")
water = loadAnimation("images/pond3.png","images/pond2.png","images/pond1.png","images/pond3.png","images/pond1.png","images/pond2.png")
horseImg = loadAnimation("images/horse1.png","images/horse2.png","images/horse3.png","images/horse2.png")
sTree2 = loadImage("images/stree.png")
sTree1 = loadImage("images/stree1.png")
sTree3 = loadImage("images/stree2.png")
sHouse = loadImage("images/house.png")
House3 = loadImage("images/house3.png")
bannerImg = loadImage("images/banner.png")
archerImg = loadImage("images/ARCHER_QUEEN.png")
towerImg = loadImage("images/tower.png")
archerBlack = loadImage("images/ARCHER_QUEEN1_BL.png")
towerBlack = loadImage("images/ARCHER_QUEEN_BL.png")
}

function setup() {
  createCanvas(1300,575);

 // pond = createSprite(685,480,50,50)
  pond = createSprite(300,450,50,50)
  pond.addAnimation("animation",water)
  pond.scale = 0.6

  createRoad();

  invisible1 = createSprite(750,360,2,75)
  invisible1.shapeColor = "black"  

  roadGrp = new Group();
  treeGrp = new Group();
  horseGrp = new Group();

  banner=createSprite(1130,500,50,50)
  banner.addImage(bannerImg)
  banner.scale=0.25

  archer = createSprite(1220,500)
  if(coins<=5){
  archer.addImage(archerImg)
  }else{
    archer.addImage(archerBlack)
  }
  archer.scale = 0.1

  tower = createSprite(1160,505)
  if(coins<=20){
    tower.addImage(towerImg)

 //   if(mousePressedOver(tower)){
  //    tower1 = createSprite(1160,505)
  //    tower1.x = mouseX;
  //    tower1.y = mouseY
  //    tower1.addImage(towerImg)
  //    console.log("BM")
//    }

    }else{
      tower.addImage(towerBlack)
    }
  tower.scale = 0.5

}

function draw() {
  background("grey");  
  drawSprites();

  if(gameState === "start"){

    if(frameCount%50===0){
     
      for(var k=1;k<=enemyNum;k++){
        test=s+k
        console.log(test)
       // test = new Enemies(horse_x_pos,370,20,20,horseImg,20,-7,0,0.25)
       test= createSprite(horse_x_pos,370,20,20)
       
        enemyArray.push(test)
        console.log(enemyArray)
        horse_x_pos+=100
      }
    }
    coins = 5;
    createNonTrees();
    createEnemies();
    Stage1();

  //  if(horseGrp.isTouching(invisible1)){
    //  changeVelocity();
   //}

 

 for(var index=0;index<enemyArray.length;index++){
  var spname=enemyArray[index]

  console.log(enemyArray[index])
  console.log(s1)
  if(s1.isTouching(invisible1)){
    s1.velocityX=0
    s1.velocityY=-5
  }
 }
   
  }

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
 createForest(200,60,35,175,sTree2,0.3,25,25)
 createForest(220,75,75,50,sTree1,0.3,75,75)
 createForest(220,50,20,90,sHouse,0.17,75,75)
 createForest(220,50,620,500,sHouse,0.17,75,75)
 createForest(210,90,875,50,sTree2,0.3,30,25)
 createForest(210,30,435,20,sTree2,0.3,25,30)
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

function createEnemies(){
 // if(frameCount%speed===0){
  //  horse1 = new Enemies(1300,370,20,20,horseImg,20,-7,0,0.25,horseGrp)
 // }

 
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

function changeVelocity(){
     horseGrp.setVelocityXEach(0);
     horseGrp.setVelocityYEach(-3);
     console.log("velocity")
}