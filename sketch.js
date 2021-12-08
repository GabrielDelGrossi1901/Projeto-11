var runner, street

var runnerImg, streetImg

var leftBoundary, rightBoundary;

function preload(){
  //imagens pré-carregadas

runnerImg = loadAnimation("Runner-1.png","Runner-2.png",);

streetImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  street= createSprite(200,200);
  street.addImage(streetImg);
  street.velocityY= 3;
  street.scale= 1;

  runner= createSprite(200,300,100,100);
  runner.addAnimation("movingRunner",runnerImg);
  runner.scale= 0.1;

  leftBoundary= createSprite(40,200,20,400);
  leftBoundary.visible= false;

  rightBoundary= createSprite(375,200,20,400);
  rightBoundary.visible= false;
}

function draw() {
  background("black");

  if(street.y > 400){
    street.y = height/2;

  }

  runner.x= World.mouseX;

  runner.bounceOff(leftBoundary);
  runner.bounceOff(rightBoundary);

  drawSprites();
}
