class bob  {
    constructor(x,y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      
      
      this.radius=radius;
      this.body=Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipse(0,0,this.radius,this.radius);
      pop();
  
      
      
      }
     
  
      
    }