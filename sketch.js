var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  
  thickness = random(22,83)
  wall = createSprite(1450, 200, thickness, 200);
  speed = random(223,321);
  weight = random(30,52);
  

 bullet.velocityX = speed;
 wall.shapeColor = color(80,80,80);
 bullet.shspecolor = "white";
}

function draw() {
  background("black");
  drawSprites();
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = (0.5*weight * speed * speed)/(thickness*thickness*thickness)
    console.log(damage);
   
    if(damage>10){
      
      wall.shapeColor = color(255,0,0);
    }

    else  {
     wall.shapeColor = color(0,255,0);
    }

    }

  

  
  
}