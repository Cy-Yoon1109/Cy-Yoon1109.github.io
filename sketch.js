let pointX;
let triY;
let mappedMouseDist;
let mouseDist;
function setup() {
  // put setup code here
  background(176,34,227);
  createCanvas(1000,1000);
  triY=300;
  pointX=600;
  //frameRate(5);
}

function draw() {
  // put drawing code here
  background(176,34,227);

  mouseDist=dist(mouseX,mouseY,pmouseX,pmouseY);
  mappedMouseDist = constrain(mouseDist, 10, 100);
  point(400,300);
  strokeWeight(mouseDist);
  line(mouseX,mouseY,pmouseX,pmouseY);

  fill(190,pointX,12);
  stroke(random(255),random(255),random(255));
  ellipse(pmouseX,pmouseY, 200,200);
    fill(30,120,45,50);
  rect(width/2, height/2, mouseDist, 200)
  triangle(800, 500, 850,200, 700, triY);

  if(mouseIsPressed){
    pointX=200;
  } else{
    pointX=600;
  };

  if(mouseIsPressed){
    triY=mouseX;
  } else{
    triY=200;
  };

  if(mouseDist>500){
    mouseDist=0;
  } else{

  };

}
