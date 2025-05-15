let X;
let Y;
let ditanciaX;
let distanciaY;
let distancia;

function setup() {
  createCanvas(400, 400);
  background("rgb(101,101,232)");
  X = random(400);
  X = int(X);
  Y = random(400);
  Y = int(Y);
}

function draw() {
  background(220);
  distanciaX = mouseX - X;
  distanciaY = mouseY - Y;
  distancia = dist(mouseX, mouseY, X, Y);
  circle(mouseX, mouseY, distancia);
  //circle(X,  Y, 10);

  if (distancia < 4) {
    text("cade o pix !", 200, 200);
    noLoop();

    
  }
  console.log(distanciaX, distanciaY);
}
