function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");
  
  stroke(0,0,0)
  strokeWeight(3)
  fill("lightblue")
  triangle(200,0,275,50,125,50)
  
  strokeWeight(7)
  fill(94,134,151)
  circle(200,200, 340)
  
  stroke(84,141,165);
  strokeWeight(7);
  fill(212,238,249);
  circle(200,200,300);
  

 
  stroke("red");
  strokeWeight(5);
  line(200,200,280,180);

  strokeWeight(7)
  stroke(84,141,165)
  line(200,200,250,100);
  
}