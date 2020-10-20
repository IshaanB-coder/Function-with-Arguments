function setup() {
  createCanvas(800,400);

  a=createSprite(400, 200, 50, 50);
  b = createSprite(400, 350, 45, 30)
a.shapeColor = "red"
b.shapeColor = "purple"
fixedRect2 = createSprite(300, 150, 50, 80)
fixedRect3 = createSprite(200, 50, 80, 50)
}

function draw() {
  background(255,255,255); 
  fill("red")
  //rectMode(CENTER)
  //rect(400,200, 50, 50) 
  b.x = mouseX
  b.y = mouseY
  console.log(b.x-a.x)
  console.log(b.width/2 + a.width/2)
  if (isTouching(fixedRect3, b)) {
    fixedRect3.shapeColor = "green"
    b.shapeColor = "green"
  }
  else {
    fixedRect3.shapeColor = "red"
    b.shapeColor = "red"
  }
  
  drawSprites();
}

