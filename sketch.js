
const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var platform
var ball
var gameState = "onSling"
var sling
var score = 0
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  ball = new Ball (645,145,15,15)
  box1 = new Box (300,300,25,25)
  box2 = new Box (330,300,25,25)
  box3 = new Box (310,300,25,25)
  box4 = new Box (320,300,25,25)
  box5 = new Box (305,295,20,20)
  box6 = new Box (315,295,20,20)
  box7 = new Box (325,295,20,20)
  box8 = new Box (310,290,15,15)
  box9 = new Box (320,290,15,15)
  box10 = new Box (315,285,10,10)
  platform = new Ground(300,345,300,10)
   sling = new SlingShot(ball.body,{x:645,y:145})

}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box4.display();  box5.display();
  box3.display();  box6.display();  box9.display(); ball.display();
  box2.display();  box7.display();  box8.display();  box10.display(); platform.display();
  box1.getScore();
  box4.getScore();  box5.getScore();
  box3.getScore();  box6.getScore();  box9.getScore(); 
  box2.getScore();  box7.getScore();  box8.getScore();  box10.getScore();
  sling.display(); 
   text("Score: "+ score, 700,50)
 
    drawSprites();
}
function mouseDragged(){
  if(gameState!=="launch"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  sling.fly();
  gameState = "launch"
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
      gameState = "onSling"
  }
}