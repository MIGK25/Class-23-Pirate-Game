const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var bgImg;



function preload() {
  towerImage = loadImage("./assets/tower.png");
  bgImg = loadImage("assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(160, 220, 100, 50, angle);

}

function draw() {
  background("black");
  image (bgImg,width/2,height/2,width,height);
  Engine.update(engine);

  ground.display();
  
  tower.display();
  
  cannon.display();
}
