
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeIMG
var boyIMG

function preload()
{
	treeIMG = loadImage("tree.png")
	boyIMG = loadImage("boy.png")
}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.update(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  text(mouseX+","+mouseY,20,20)
 
}



