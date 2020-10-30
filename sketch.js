var bullet, wall;
var speed, weight;
var thickness;


function setup() {
  createCanvas(1600,400);
 thickness=random(22,83);
 speed= random(223,321);
weight=random(30,52);
bullet=createSprite(50, 200, 40, 10);
bullet.velocityX=speed;
wall=createSprite(1500,200,0,height/2);
wall.width=thickness;

}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
if(damage>10)
  {
    wall.shapeColor="red";
  }
if(damage<10)
{
  wall.shapecolor="green";
}
  } 
  
  wall.depth=bullet.depth;
  bullet.depth=bullet.depth+1;


  drawSprites();





}
