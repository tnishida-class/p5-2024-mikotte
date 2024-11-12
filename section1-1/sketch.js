function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(400,400,400);
  stroke(178, 100, 162);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(400,400,400);
  triangle(0,108,106,108,106,0);
  fill(178, 100, 162);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
