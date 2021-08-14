const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

let ground;
let rope;
var fruit;
var fruit_con;

function setup() {
  createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 690, 600, 20);
  rope = new Rope(6, { x: 245, y: 30 });
  var fruits_options = {
    density: 0.001,
  }
  fruit = Bodies.circle(300, 300, 20, fruits_options);
  Matter.Composite.add(rope.body, fruit);

  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() {
  background(51);
  Engine.update(engine);

  ellipse(fruit.position.x, fruit.position.y, 20, 20);

  ground.show();
  rope.show();

}




