var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5,pointB;
var bodyA,bodyB,body1,body2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(800,200,800,50);

	bob1=new bob(200,400,50);
	bob2=new bob(400,400,50);
	bob3=new bob(600,400,50);
	bob4=new bob(800,400,50);
	bob5=new bob(1000,400,50);

	rope1=new Rope(bob1.body,ground.body,0,200);
	rope2=new Rope(bob2.body,ground.body,100,200);
	rope3=new Rope(bob3.body,ground.body,200,200);
	rope4=new Rope(bob4.body,ground.body,300,200);
	rope5=new Rope(bob5.body,ground.body,400,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	ground.display();

  drawSprites();
	
	console.debug(rope1);
	

}


function attach(){
	rope1.attach(bob1);
	rope2.attach(bob2);
	rope3.attach(bob3);
	rope4.attach(bob4);
	rope5.attach(bob5);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-705,y:-85});
	}
}
