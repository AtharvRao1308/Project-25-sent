class paper{
    
    constructor(x,y,radius){

       var options = {
           
        isStatic : false,
        "restitiution" : 3,
        "friction" : 0.5,
        "density" : 1.2,
       }
       
       this.image = loadImage("paper.png");

       this.body = Bodies.circle(this.x,this.y,this.radius,options);
       
       World.add(world, this.body);

    }

    display(){

        var paperpos=this.body.position;
         push()
         translate(paperpos.x, paperpos.y);
         rectMode(CENTER)

         fill(255,0,255)
          imageMode(CENTER);
          image(this.image, 0,0,this.radius);
          pop()

    }
    
}