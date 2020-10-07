class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.01,
            length: 10
        }
        
        
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        this.sling.bodyB = body;
    }
    
   

    display(){

        strokeWeight(10);

       var pointA=this.sling.bodyA.position;
       var pointB=this.sling.bodyB.position;

       

       var Anchor1X=pointA.x
       var Anchor1Y=pointA.Y

       var Anchor2X=pointB.x+this.offsetX
       var Anchor2Y=pointB.y+this.offsetY

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
}