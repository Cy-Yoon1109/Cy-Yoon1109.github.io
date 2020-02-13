function RightUpper(i,j){


// line length
let r1 = 50;
let r2 = 100;
let r3 = 300;
let r4 = 150;
let r5 = 200;



//diameter
let m1 = 10;
let m2 = 10;
let m3 = 10;
let m4 = 10;

let a1 = 3.14159265358979323846/8;
let a2 = 3.14159265358979323846/4;
let a3 = 3.14159265358979323846/10;
let a4 = 3.14159265358979323846/2;

// velocity of rotation
let a1_v = 0;
let a2_v = 0;
// let a1_a = 0.01;
// let a2_a = -0.001;
let g = 1;

// let px2 = 0;
// let py1 = 0;


  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1-2*a2);
  let num3 = -2*sin(a1-a2)*m2;
  let num4 = a2_v*a2_v*r2+a1_v*a1_v*r1*cos(a1-a2);
  let den = r1 * (2*m1+m2-m2*cos(2*a1-2*a2));

  let a1_a = (num1 + num2 + num3*num4) / den;
  let a2_a = 0;
//double
  // let num1 = -g * (2 * m1 + m2) * sin(a1);
  // let num2 = -m2 * g * sin(a1-2*a2);
  // let num3 = -2*sin(a1-a2)*m2;
  // let num4 = a2_v*a2_v*r2+a1_v*a1_v*r1*cos(a1-a2);
  // let den = r1 * (2*m1+m2-m2*cos(2*a1-2*a2));
  //
  // let a1_a = (num1 + num2 +num3*num4) / den;
  // let a2_a = 0;

  // num1 = 2 * sin(a1-a2);
  // num2 = (a1_v*a1_v*r1*(m1+m2));
  // num3 = g * (m1+m2) * cos(a1);
  // num4 = a2_v*a2_v*r2*m2*cos(a1-a2);
  // den = r2 * (2*m1+m2-m2*cos(2*a1-2*a2));
  // let a2_a = (num1*(num2+num3+num4)) / den;


  background(255);

  translate(i,j);

  var x1 = r1 * sin(a1);
  var y1 = r1 * cos(a1);

  var x2 = x1+r2 * sin(a2);
  var y2 = y1+r2 * cos(a2);

  var x2_1 = x1 + r3 * sin(a2);
  var y2_1 = y1 + r4 * cos(a3);

  var x2_2 = x1 + r4 * sin(a2);
  var y2_2 = y1 + r4 * cos(a4);

  var x3 = x2+r3 * sin(a3);
  var y3 = y2+r3 * cos(a3);

  var x4 = x3+r4 * sin(a4);
  var y4 = y3+r4 * cos(a4);

  var x5 = x4 + r5 * sin(a4);
  var y5 = y4 + r5 * cos(a2);

  stroke('#32a852');
  strokeWeight(2);
// 1st ellipse
  line(0,0,x1,y1);
  fill(0);
  ellipse(x1,y1,m1,m1);

  stroke('#3244c9');
//2nd
  line(x1,y1,x2,y2);
  fill(0);
  ellipse(x2,y2,m2,m2);
//2nd_1
  line(x1,y1,x2_1,y2_1);
  fill(0);
  ellipse(x2_1,y2_1,m2,m2);
//2nd_2
  line(x1,y1,x2_2,y2_2);
  fill(0);
  ellipse(x2_2,y2_2,m2,m2);

  stroke('#ed791a');
//3rd
  line(x2,y2,x3,y3);
  fill(0);
  ellipse(x3,y3,m3,m3);
//4th
  line(x3,y3,x4,y4);
  fill(0);
  ellipse(x4,y4,m4,m4);
//4th_1
  line(x3,y3,x2_2,y2_2);
  fill(0);
  ellipse(x4,y4,m2,m2);

  stroke('#cb0be0');
//5th
  line(x4,y4,x5,y5);
  fill(0);
  ellipse(x5,y5,m2,m2);
//5th_1
  line(x5,y5,x3,y3);
  fill(0);
  ellipse(x3,y3,m2,m2);


  a1_v += a1_a;  //a1_a
  a2_v -= a2_a;  //a2_a
  // a3_v -= 10;

//// angle = velocity of rotation
  a1 += 0.1; //a1_v
  a2 -= 0.01; //a2_v
  a3 *= 0.1;
  a4 += 0.02;
  // a5 -= 0.2;

  // a1_v *= 0.9;
  // a2_v *= 0.9;

}
