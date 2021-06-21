class obstacle{
    constructor(x,y,width,height,image,scale,life,id){
      this.life = life
        if(life>0){
        this.obstacle = createSprite(x,y,width,height)
        this.x=x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.scale =scale;
        this.obstacle.addImage(image)
        this.obstacle.scale = scale
        this.id = id
        }else{
          console.log("obstacle no: "+ id +"...I am dead")
        }
    }
}