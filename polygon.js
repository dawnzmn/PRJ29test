class polygon {
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0 
        }

    this.body = Bodies.circle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    this.image = loadImage("polygon.png");
    }

    display(){
        fill("blue");
        var pos = this.body.position;
       /* ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);*/
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}