
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,tree,stone,boy,slingshot;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	boyImg= loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,600,10,10);
	boy.add(boyImg);

	ground = new Ground(600,height,1200,20);
	stone = new Stone(100,600,5);
	tree = new Tree(600,20)
	mango1= new Mango(650,550,5);
	mango2= new Mango(700,550,5);
	mango3= new Mango(700,400,5);
	mango4= new Mango(600,530,5);
	mango5= new Mango(650,500,5);
	slingshot = new Slingshot(stone.body,{x:200, y:100});
	
}


function draw() {
  background("white");
  Engine.update(engine)
  drawSprites();
  strokeWeight(4);
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 slingshot.display();
 tree.display();
 mouseDragged();
 mouseReleased();
 detectcollision();
 keyPressed();
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r,lstone.r){
	Matter.body.setStatic(lmango.body,false);
}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:600})
		launcherObject.attach(stone.body)
	}
}
