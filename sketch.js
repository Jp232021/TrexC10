
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 trex=createSprite(50,180,20,50);
 trex.addAnimation("running",trex_running);
 
 //crea sprite del suelo
 ground=createSprite(200,180,400,20);
 ground.x=ground.width/2
 
 //agregar tamaño y posiciòn al t-rex
 trex.scale=0.5;
 trex.x=50;
 
}

function draw(){
 background(220);
 //pone velocidad al piso
ground.velocityX=-2;


//hacemos el piso infinito
if(ground.x<0){
  ground.x=ground.width/2;
}


 if(keyDown("space")){
 trex.velocityY=-10;
}
trex.velocityY=trex.velocityY+0.8;


//evitar que el trex se caiga
trex.collide(ground);



drawSprites();

}
