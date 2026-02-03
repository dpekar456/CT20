let spin = 0;
let userSpin = 0
let lastMouseX = 0
let dragging = false

function setup() {
  createCanvas(400, 400, WEBGL);
  colorMode(HSB,360,100,100);
angleMode(RADIANS);
}

function mousePressed(){
  dragging = true
  lastMouseX = mouseX
}
function mouseReleased(){
  dragging = false
  
}
function draw() {
  background(0)
  
   print(hour(),minute(),second())
  let s = map(second(),0,60,TWO_PI,0);
  let m = map(minute() % 60 + second()/60 , 0, 60, TWO_PI, 0);
  let h = map(hour() % 12 + minute() / 60 ,0,12,TWO_PI,0);

  let spinSpeed = map(second(), 0, 60, 0.05, 0.002);
  spin += spinSpeed;
  
  if (dragging) {
    let dx = mouseX - lastMouseX
    userSpin += dx * 0.06;
    lastMouseX = mouseX;
  }
  
push();
  rotateZ(spin + userSpin);
  let hue = map(second(),0,60,360,0)
  fill(hue,100,100)
noStroke();
pinwheel(90,12)
pop();
  
  stroke(0,0,100);
  strokeCap(ROUND)
  
  push();
  rotateZ(s);
  strokeWeight(2)
  line(0,0,0,-100)
  pop();
  
  push();
  rotateZ(m)
  strokeWeight(4)
  line(0,0,0,-80)
  pop();
  
  push();
  rotateZ(h)
  strokeWeight(6)
  line(0,0,0,-60)
  pop();
  
  noStroke()
  fill(0,0,100)
circle(0,0,20)

  
function pinwheel(size,blades) {
  let step = TWO_PI/blades;
  for (let i=0; i < blades;i++){
    push()
    rotateZ(i*step);
  
  quad (0,0,size,0,size,size,0,size)
    pop();
  }
}}

