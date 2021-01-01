
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj=new roof(400,100,500,50);
	bobObject1= new bob(200,500,100);
	bobObject1.shapeColor="purple";
	rope1= new rope (bobObject1.Body, roofObj.Body,-200,0);
	bobObject2= new bob(300,500,100);
	rope2= new rope(bobObject2.Body, roofObj.Body,-100,0);
	bobObject3= new bob(400,500,100);
	rope3= new rope(bobObject3.Body, roofObj.Body,0,0);
	bobObject4= new bob(500,500,100);
	rope4= new rope(bobObject4.Body, roofObj.Body,100,0);
	bobObject5= new bob(600,500,100);
	rope5= new rope(bobObject5.Body, roofObj.Body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.Body,bobObject1.Body.position,{x:-700,y:-80});
	}

}



//{x:-100,y:-80});