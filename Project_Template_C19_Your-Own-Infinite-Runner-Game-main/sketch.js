var space,spaceImg
var rocket,rocketImg
var meteor,meteorGroup
var meteorImg1,meteorImg2,meteorImg3,meteorImg4
var restart, resetImg
var gamestate = "PLAY"

function preload(){

meteorImg1 = loadImage("asteroid.png")
meteorImg2 = loadImage("asteroid(1).png")
meteorImg3 = loadImage("meteor.png")
meteorImg4 = loadImage("meteorites.png")
rocketImg = loadImage("spaceship.png")
spaceImg = loadImage("space-safari-background.png")
resetImg = loadImage("rotate-arrow.png")

}

function setup() {
 
createCanvas(windowWidth,windowHeight)

space = createSprite(width/2,height/2)
rocket = createSprite(width/2,height/2+230)
restart = createSprite(width/2,height/2)
meteorGroup = createGroup()

rocket.addImage(rocketImg)
space.addImage(spaceImg)
restart.addImage(resetImg)

rocket.scale = 0.1
space.scale=1.4
restart.scale = 0.2

}

function draw() {
 background("blue")
 drawSprites()
 meteors()
 reset.depth = 2
if (gamestate=="PLAY"){
 restart.visible = false



 
space.velocityY = 4;

  if (space.y > height){

space.y = 0

  }
if ((keyDown("LEFT"))){

rocket.x = rocket.x -5

}

if ((keyDown("RIGHT"))){

  rocket.x = rocket.x +5
  
  }

  if (meteorGroup.isTouching(rocket)){
    gamestate = "END"
    space.velocityY= 0 
    }


}
else if (gamestate == "END"){
  restart.visible = true
  meteorGroup.setVelocityYEach(0)
  meteorGroup.setLifetimeEach(-1)

  if (mousePressedOver(restart)){
    reset()
    
    }


}

drawSprites()
}

function meteors(){
  if (frameCount % 20 === 0) {
meteor = createSprite(40,-60,10)
var rand = Math.round(random(1,4))
switch (rand){

case 1: meteor.addImage(meteorImg1)
break;
case 2: meteor.addImage(meteorImg2)
break;
case 3: meteor.addImage(meteorImg3)
break;
case 4: meteor.addImage(meteorImg4)
break;
default:break;
}
meteor.x = Math.round(random(width/2-600, width/2+600));
meteor.scale = 0.2
meteor.lifetime = 240
meteor.velocityY = 4
meteorGroup.add(meteor)

}
}

function reset(){
gamestate = "PLAY"
  meteorGroup.destroyEach()
 
  }

