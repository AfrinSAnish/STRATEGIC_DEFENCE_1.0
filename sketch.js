var castle
var coins = 0
var gameState = "start";
var roadGrp,obstacleGrp,horseGrp;

var posX =525;
var posY =155;
var scale = 0.5;


var rockLife = 0;
var treeLife = 0;
var speed = 10
var horse1,invisible1;

function preload(){
casImg = loadImage("images/castle.png")
treeImg1 = loadImage("images/tree.png")
rockImg1 = loadImage("images/rock.png")
forest1 = loadImage("images/forest.png")
water = loadAnimation("images/pond3.png","images/pond2.png","images/pond1.png","images/pond3.png","images/pond1.png","images/pond2.png")
horseImg = loadAnimation("images/horse1.png","images/horse3.png","images/horse2.png","images/horse1.png","images/horse2.png")
}

function setup() {
  createCanvas(1300,575);

 // pond = createSprite(685,480,50,50)
 pond = createSprite(325,450,50,50)
  pond.addAnimation("animation",water)
  pond.scale = 0.6

  createRoad();

  roadGrp = new Group();
  treeGrp = new Group();
  horseGrp = new Group();
}

function draw() {
  background("grey");  
  drawSprites();

  textSize(20)
  text("coins"+coins,50,50)

  if(gameState === "start"){
    coins = 100;
    Stage1();
    createNonTrees();
    createEnemies();
   // roadGrp.depth = horseGrp.depth;
   // horseGrp.depth= horseGrp.depth+1;


    if(horseGrp.isTouching(invisible1)){
      horseGrp.setVelocityYEach = -3;
      horseGrp.setVelocityXEach=0
    }
  }

  fill("red");
  text(mouseX+','+mouseY,mouseX,mouseY)
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

}

function createNonTrees(){
 createForest(400,350,30,30,forest1)
 createForest(400,50,440,30,forest1)
 createForest(450,300,840,30,forest1)
}

function createForest(endNumx,endNumy,iposX,iposY,image){
  for(var i =0; i < endNumx; i = i+50){
    for(var z = 0; z < endNumy; z = z+50 ){
    object = new obstacle(iposX+i,iposY+z,50,50,image,0.2,treeLife,"gp1")
  }
}
}

function createEnemies(){
  if(frameCount%speed===0){
    horse1 = new Enemies(1300,370,20,20,horseImg,20,-5,0,0.25,horseGrp)
  }

}

function createRoad(){
  road1 = new Road(1040,385,550,30)
  road2 = new Road(765,250,30,300)
  road3 = new Road(620,115,300,30)
  road4 = new Road(485,325,30,400)
  road5 = new Road(305,540,390,30)


 castle = createSprite(130,475,50,50)
 castle.addImage(casImg)
 castle.scale = 0.4;

 invisible1 = createSprite(750,360,2,75)
 invisible1.shapeColor = "black"
}