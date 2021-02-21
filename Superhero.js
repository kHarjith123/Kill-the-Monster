class Superhero {

    constructor(x,y,width,height,angle){
 
    var options = {
 
     frictionAir : 0.005,
     density : 1.5
     
 
    } 
 
    this.width = width;
    this.height = height;
    this.image = loadImage("Superhero-01.png");
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
 
     }
 
 
     display(){
 
 
       var pos = this.body.position;
       var angle = this.body.angle;
       push()
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(RADIUS);
       fill("Yellow");
       image(this.image,0,0,this.width,this.height);
       pop()
 
 
 
 
         
     }
 
 
 
 
         
 
     
 
 
 
     
 }