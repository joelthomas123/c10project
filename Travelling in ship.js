var shipImg,ship,seaImg,sea;
function preload(){

shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg=loadImage("sea.png")

}

function setup(){
  createCanvas(600,600);

}

//creating sea
sea=createSprite(70,180,20,20);
sea.x=sea.width/2;
sea.velocityX=2;
sea.visible=true;
sea.addImage(seaImg);

//creating ship
ship=createSprite(70,180,20,20)
ship.addAnimation(ship);
ship.scale=0.2;

function draw() {
  background("50");
  
 if(keyDown("space")){
   ship.velocityY = -10;
 }

 if(sea.x < 0){
   sea.x = sea.width / 2;
 }
 ship.collide(sea);
 drawSprites()
}

