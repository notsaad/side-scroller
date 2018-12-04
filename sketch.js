var person;

//var obstacle;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed() {

  if (key == ' '){
    var jump = createVector(0, -5);
    person.applyForce(jump);
  }
  
    if (key == 'ArrowLeft'){
    var jump = createVector(-5, 0);
    person.applyForce(left);
  }
  
    if (key == 'ArrowRight'){
    var right = createVector(5, 0);
    person.applyForce(right);
  }

}

function draw() {
  background(51);

  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);

  translate(-person.pos.x+50, 0);

  person.update();
  person.edges();
  person.display();

  fill(255, 0, 100);
  rect(400, height-50, 50, 50);
}
