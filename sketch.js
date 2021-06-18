const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var gameState=0;
var PLAY=0;
var END=1;
var visibility=0;
function preload(){
  bg=loadImage("bg.jpg");
  text1=loadImage("text.png");
  text2=loadImage("text2.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand2 = new Ground_(); 
  stand1 = new Stand(390,300,250,10);
  


  //level one
  block1 = new Block(300,275,30,30);
  console.log(block1);
  block2 = new Block(330,275,30,30);
  block3 = new Block(360,275,30,30);
  block4 = new Block(390,275,30,30);
  block5 = new Block(420,275,30,30);
  block6 = new Block(450,275,30,30);
  block7 = new Block(480,275,30,30);
  //level two
  block8 = new Block2(330,235,30,30);
  block9 = new Block2(360,235,30,30);
  block10 = new Block2(390,235,30,30);
  block11 = new Block2(420,235,30,30);
  block12 = new Block2(450,235,30,30);
  //level three
  block13 = new Block3(360,195,30,30);
  block14 = new Block3(390,195,30,30);
  block15 = new Block3(420,195,30,30);
  //top
  block16 = new Block4(390,155,30,30);

  //level one(2)
 
  block1_2 = new Block(530+50,175,30,30);
  block2_2 = new Block(560+50,175,30,30);
  block3_2 = new Block(590+50,175,30,30);
  block4_2 = new Block(620+50,175,30,30);
  block5_2 = new Block(650+50,175,30,30);

  //level two(2)
 
  block6_2 = new Block2(560+50,135,30,30);
  block7_2 = new Block2(590+50,135,30,30);
  block8_2 = new Block2(620+50,135,30,30);
 
  //top(2)
  block9_2= new Block4(590+50,95,30,30);

//polygon
polygon1= new Polygon(100,200,45,45);
chain1= new Chain(polygon1.body,{x:100,y:200})
  


}
function draw() {
  background(bg)
  if(gameState===0)
  {
    strokeWeight(3.3)
    stroke("#A32CC4")
    fill("#CCC2F6");
    textFont("Niagara Engraved");
    push();
    textSize(140);
    //text("TOWER",150,height/2);
    //text("SIEGE",width/2+50,height/2);
    pop();
    textSize(40)
    visibility+=5;
    tint(255,visibility);
    image(text1,width/3-13,327,300,74);
    image(text2,width/4-96,90,578,119);
  }
  if(keyCode===RIGHT_ARROW)
  {
    gameState=1;
  }
  if(gameState===1)
  {
if(polygon1.body.position.x>-1 && polygon1.body.position.x<250)
{
  textSize(20);
  fill("white")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50);
}
else
{
  textSize(20)
  fill("white")
  text("Press Space to get another chance",100,50);
}

 polygon1.display();
 chain1.display();
 console.log(polygon1);

 
  
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block1_2.display();
  block2_2.display();
  block3_2.display();
  block4_2.display();
  block5_2.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block9_2.display();


  block13.display();
  block14.display();
  block15.display();
  block6_2.display();
  block7_2.display();
  block8_2.display();

  block16.display();
}
}
function mouseDragged()
{
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  chain1.fly();
}
function keyPressed()
{
  if(keyCode===32) 
  {
  Matter.Body.setPosition(polygon1.body,{x:100,y:200})
  chain1.attach(polygon1.body)
  }
}
