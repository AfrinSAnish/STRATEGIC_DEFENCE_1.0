class Enemies{
    constructor(x,y,width,height,images,health,velocityX,velocityY,scale){
        this.army = createSprite(x,y,width,height)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.images=images;
        this.velocityX=velocityX;
        this.velocityY=velocityY;
        this.army.velocityX = velocityX
        this.army.velocityY = velocityY
        this.scale = scale;
        //this.Grp = Grp;
        this.army.addAnimation("left",images)
        this.army.scale = scale
       // this.Grp.add(this.army)
    }
}