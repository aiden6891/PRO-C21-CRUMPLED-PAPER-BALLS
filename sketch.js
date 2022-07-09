const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



let engine;
let world;

var ground;
var left;
var rightv;
var top_wall;
var ball
var upArrow, rightArrow

function setup() {
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;
  
upArrow = createImg("up.png");
upArrow.position(20,30);
upArrow.size(50,50);
upArrow.mouseClicked(vForce);

rightArrow = createImg("right.png");
rightArrow.position(220,30);
rightArrow.size(50,50);
rightArrow.mouseClicked(hForce);

  ground = new Ground(200,390,1000,20);
  right = new Ground(690,200,20,700);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1000,20);
  

  var ball_option = {
    restitution: 0.95

  };

  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(world,ball);

  console.log(ball);

 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);


}

function hForce(){
Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05,y:0})

}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y:-0.05})
}

