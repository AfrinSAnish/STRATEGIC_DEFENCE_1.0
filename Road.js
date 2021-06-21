class Road{
    constructor(x,y,width,height){
        this.army = createSprite(x,y,width,height)
        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.army.shapeColor = "white"
    }
}