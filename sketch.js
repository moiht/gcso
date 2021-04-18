var car,wall;
var speed,weight,deformation;




function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2); 
  wall.shapeColor = color(80, 80, 80);
  speed = random(5.5,9.0);
  weight = random(400,1900);
  car.velocityX = speed;
  deformation =0.5* weight*speed*speed/225
}

function draw() {
  background(255,255,255);  
  
  if(car.x-wall.x < car.width/2+wall.width/2 && wall.x-car.x < wall.width/2+car.width/2){
    if (deformation>180){
     car.shapeColor = color(255, 0, 0); 
    }
    else if(100<deformation<180){
      car.shapeColor = color(230, 230, 0);  
    }
    else if(deformation<100){
      car.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}