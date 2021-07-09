var castle,invisible1
var coins = 0
var gameState = "start";
var roadGrp,obstacleGrp,horseGrp;
var s1,s2,s3,s4,s5;
var pressed = 0;
var roadImg;

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
casImg = loadImage("Images/castle.png")
treeImg1 = loadImage("Images/tree.png")
rockImg1 = loadImage("Images/rock.png")
forest1 = loadImage("Images/forest.png")
water = loadAnimation("Images/pond3.png","Images/pond2.png","Images/pond1.png","Images/pond3.png","Images/pond1.png","Images/pond2.png")
horseImg = loadAnimation("Images/horse1.png","Images/horse2.png","Images/horse3.png","Images/horse2.png")
sTree2 = loadImage("Images/grass1.png")
sTree1 = loadImage("Images/stree1.png")
sTree3 = loadImage("Images/stree2.png")
sHouse = loadImage("Images/house.png")
House3 = loadImage("Images/house3.png")
bannerImg = loadImage("Images/banner.png")
archerImg = loadImage("Images/ARCHER_QUEEN.png")
towerImg = loadImage("Images/tower.png")
archerBlack = loadImage("Images/ARCHER_QUEEN1_BL.png")
towerBlack = loadImage("Images/ARCHER_QUEEN_BL.png")
roadImg = loadImage("Images/road.jpg")
road1Img = loadImage("Images/road1.jpg")
}

function setup() {
  createCanvas(1300,575);

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
  archer.scale = 0.5;

  tower = createSprite(1160,505)
  tower.scale = 0.25
  if(coins>=20){
    tower.addImage(towerImg)
    }else{
      tower.addImage(towerBlack)
    }
}

function draw() {
  background	(152,251,152);  
  drawSprites();

  console.log(pressed)

  if(coins>=5){
    archer.addImage(archerImg)
    }else{
      archer.addImage(archerBlack)
    }

  if(gameState === "start"){
    enemyNum = 2;
    coins = 12
    if(frameCount%50===0){
     
      for(var k=1;k<=enemyNum;k++){
        test=s+k
        console.log(test)
        test = new Enemies(horse_x_pos,370,20,20,horseImg,20,-7,0,0.25)
      // test= createSprite(horse_x_pos,370,20,20)
       
        enemyArray.push(test)
        console.log(enemyArray)
        horse_x_pos+=100
      }
    }
    createNonTrees();
    createArmy();
    Stage1();
   
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
  }
  if(pressed===1){
  //  archer1 = createSprite(mouseX,mouseY,10,100);
  //  archer1.addImage(archerImg)
  //  archer1.scale = 0.5
  image(archerImg,mouseX,mouseY,75,75)
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

function changeVelocity(){
     horseGrp.setVelocityXEach(0);
     horseGrp.setVelocityYEach(-3);
     console.log("velocity")
}