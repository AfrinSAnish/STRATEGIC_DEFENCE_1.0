class Road{
    constructor(x,y,width,height,grp){
        this.Road = createSprite(x,y,width,height)

        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.Road.shapeColor = "white"
        this.grp = grp;
        obstGrp.add(this.Road)
    }
}