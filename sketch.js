//name spacing (nicknames)  
var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

function setup() {

  createCanvas(800, 1000);
  engine = Engine.create();
  //small w and e have their own program
  world = engine.world;
}

function draw() {
   Engine.update(engine);
  background(235,214,145);  
  angleMode(DEGREES);

  stroke("Green");
  strokeWeight(3);
  line(0,100,800,100);

  stroke("white");  
  strokeWeight(3);
  line(0,500,800,500);

  stroke("Red");
  strokeWeight(3);
  line(0,900,800,900);

  stroke("White");
  strokeWeight(3);
  fill("Red");
  arc(765, 500, 70, 70, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill(235,214,145);
  arc(765, 500, 35, 35, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill("Green");
  arc(35, 500, 70, 70, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill(235,214,145);
  arc(35, 500, 35, 35, 0, 360);

  stroke("White");
  strokeWeight(5);
  noFill();
  arc(400,500,200,200,0,360) ;

  
}