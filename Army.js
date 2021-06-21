class Army{
    constructor(x,y,width,height,lvl){
        this.army = createSprite(x,y,width,height,lvl)
        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.army.shapeColor="green"
    }
}