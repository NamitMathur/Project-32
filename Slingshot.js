class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
    }
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);
    this.pointB=pointB
    }
    display(){
      if(this.sling.bodyA){
        var pointB=this.pointB
        strokeWeight(4);
        line(this.sling.bodyA.x,this.sling.bodyA.y,pointB.x,pointB.y);
      }
    }

    fly(){
        this.sling.bodyA=null;
    }
    attach(object){
      this.sling.bodyA=object;
    }
}