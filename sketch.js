var ball1, blower, blowermouth;
var sid;
var button;

function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);

  button=createButton("Click to Play");
  button.position(200,300,100,100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {

  // ball1=new Ball(20,20,20,20);
  // blower= new Blower(20,20,20,20);
  // sid=new Ground(20,300,40,12);
  
  background(50,50,50);  
  drawSprites();
}

function blow(){
Matter.Body.applyForce(ball.body,{x:0, y:0},{x:0, y:0.05});
}