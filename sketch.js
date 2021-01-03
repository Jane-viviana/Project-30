const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground2;
var block1,block2,block3,block4;
var block5,block6,block7,block8;
var block9,block10,block11;
var polygon;
var sling;


function setup(){
     var canvas = createCanvas(800,500);
     engine = Engine.create()
     world = engine.world;

     ground = new Ground(475,400,300,15);
     block1 = new Block(475,300,50,50);
     block2 = new Block(450,300,50,50)
     block3 = new Block(450,300,50,50);
     block4 = new Block(475,300,50,50);
     
     ground2 = new Ground(600,200,300,15);
     block5 = new Block(600,100,50,50);
     block6 = new Block(600,100,50,50);
     block7 = new Block(600,100,50,50);
     block8 = new Block(650,20,50,50);
     block9 = new Block(650,20,50,50);
     block10 = new Block(550,20,50,50);
     block11 = new Block(550,20,50,50);

     polygon = new Polygon(250,250,15,15);
     sling = new SlingShot(polygon.body,{x:250,y:250});
}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    ground2.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
   block11.display();

    polygon.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    
    if(keyCode === 32){

    sling.attach(polygon.body);
    }
}