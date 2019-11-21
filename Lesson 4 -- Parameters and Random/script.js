function setup (){
  createCanvas(600,600)
  background(60)
  // frameRate(3)
}

function draw(){
  let y = random(601);
  strokeWeight(random(5));
  // stroke(random(256),random(256),random(256),random)
  line(random(600),y,random(600),y);
  // fill(random(256),random(256),random(256))
  // triangle(300,300,300,400,400,400)
}