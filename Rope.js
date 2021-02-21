
class Rope {

    constructor(bodyA,pointB){

        var options = {

        bodyA : bodyA,
        pointB : pointB,
        stiffness : 1.5,
         length : 250   
        
        
        }


        this.pointB = pointB;
        this.hanger = Constraint.create(options);
        World.add(world,this.hanger);


    }



    display(){


    if(this.hanger.bodyA){
    var pointA = this.hanger.bodyA.position;
    var pointB = this.pointB  ;
    push()
    strokeWeight(4);
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    pop()
  }


    }


}