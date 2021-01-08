
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.

	
	
	bob1=new Bob(400,500,50);
	
	bob2=new Bob(500,500,50);
	bob3=new Bob(600,500,50);
	bob4=new Bob(700,500,50);
	bob5=new Bob(800,500,50);
	

	roof=new Roof(600,50,600,60);
	rope1=new Rope(bob1.body,roof.body,-100*2,0);
	rope2=new Rope(bob2.body,roof.body,-50*2,0);
	rope3=new Rope(bob3.body,roof.body,-0*2,0);
	rope4=new Rope(bob4.body,roof.body,50*2,0);
	rope5=new Rope(bob5.body,roof.body,100*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();


}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:-800}); } 
} 

