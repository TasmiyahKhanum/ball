const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var wall1,wall2,wall3,wall4,wall5;
var ball,cube;

function setup() {

	createCanvas(windowWidth,windowHeight);
  
	engine = Engine.create();
	world = engine.world;
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
	
	wall1 = new Ground(windowWidth/2,windowHeight-10,windowWidth,10);
	wall2 = new Ground(windowWidth/4,windowHeight-90,10,150);
	wall3 = new Ground(windowWidth/18,windowHeight-90,10,150);
	wall4 = new Ground(900,windowHeight-90,10,150);
	wall5 = new Ground(1150,windowHeight-90,10,150);
  
	var ball_op = {
	  restitution : 0.3,
	  frictionAir : 0,
	  density : 1.2
	}
	 
	ball = Bodies.circle(windowHeight,10,20,ball_op);
	World.add(world,ball);
	fill("pink");

	var cube_op = {
		restitution : 0.3,
		frictionAir : 0,
		density : 1.2
	  }
	   
	  cube = Bodies.rectangle(windowHeight+13 ,10,25,25,cube_op);
	  World.add(world,cube);
}

function draw() 
{
  background("black");
  text("Space to throw the ball into the bin",20,20);
  text("up arrow to throw the ball into the bin",20,30);
  Engine.update(engine);

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();

  ellipse(ball.position.x,ball.position.y,10);
  rect(cube.position.x,cube.position.y,25,25)
  if(keyDown("SPACE") ){
	Bforce();
}
	if(keyDown("UP_ARROW") ){
	Cforce();
}
}

function Bforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-9,y:-9});
}

function Cforce(){
	Matter.Body.applyForce(cube,{x:0,y:0},{x:9,y:9});
}




  