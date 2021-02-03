var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
	var packageBody_options = {
		restitution:0.8
	  }
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxleftsprite = createSprite(width/2 - 100,610,20,100)
	 boxleftsprite.shapeColor = "red"
	 boxleftbody= Bodies.rectangle(width/2 -100,610,20,100,{isStatic:true});
	 World.add(world,boxleftbody)
	 boxrightsprite= createSprite(width/2 +100,610,20,100)
     boxrightsprite.shapeColor = color(255,0,0);
	 boxrightbody = Bodies.rectangle(width/2 +100,610,20,100,{isStatic:true})
	 boxbottomsprite = createSprite(width/2,650,200,20)
	 boxbottomsprite.shapeColor = color(255,0,0);
     boxbottombody = Bodies.rectangle(width/2,650,200,20,{isStatic:true})
	Engine.run(engine);
	
	
	  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== DOWN_ARROW ) {
		Matter.Body.setStatic(packageBody,false)
    }
	else if (keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x -20;
		translation ={ x:-20, y:0}
		Matter.Body.translate(packageBody,translation)
	}
	else if (keyCode===RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x +20;
		translation ={ x:+20, y:0}
		Matter.Body.translate(packageBody,translation)
	}



	
}



