
// line length
let r1 = 50;
let r2 = 100;
let r3 = 300;
let r4 = 150;
let r5 = 200;
let r6 = 400;
let r7 = 530;
let r8 = 640;
let r9 = 790;


//diameter
let m1 = 10;
let m2 = 10;
let m3 = 10;
let m4 = 10;
let m5 = 50;

let a1 = 3.14159265358979323846/8;
let a2 = 3.14159265358979323846/4;
let a3 = 3.14159265358979323846/3.5;
let a4 = 3.14159265358979323846/2;
let a5 = 3.14159265358979323846/5;


// velocity of rotation
let a1_v = 0;
let a2_v = 0;
// let a1_a = 0.01;
// let a2_a = -0.001;
let g = 1;

// let px2 = 0;
// let py1 = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  // RightUpper(width,0);
  // put drawing code here
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

  push();
  translate(width/2,height/2);

  var x1 = r1 * sin(a1);
  var y1 = r1 * -cos(a1);

  var x1_1 = (r1+50) * sin(a2);
  var y1_1 = (r1+50) * cos(a2);

  var x1_2 = (r1+100) * -sin(a2*3);
  var y1_2 = (r1+100) * cos(a2*3);

  var x1_3 = (r1+150) * sin(a2*2.5);
  var y1_3 = (r1+150) * cos(a2*2.5);

  var x1_4 = (r1+200) * sin(a2*2);
  var y1_4 = (r1+200) * -cos(a2*2);

  var x1_5 = (r1+250) * sin(a2*1.4);
  var y1_5 = (r1+250) * -cos(a2*1.4);

  var x1_6 = (r1+300) * sin(a2*1.5);
  var y1_6 = (r1+300) * cos(a2*1.5);

  var x1_7 = (r1+350) * sin(a2*0.5);
  var y1_7 = (r1+350) * -cos(a2*0.5);

  var x1_8 = (r1+400) * sin(a2*1.7);
  var y1_8 = (r1+400) * cos(a2*1.7);

  var x1_9 = (r1+450) * -sin(a2*0.1);
  var y1_9 = (r1+450) * cos(a2*0.1);

  var x1_10 = (r1+500) * sin(a2*0.9);
  var y1_10 = (r1+500) * cos(a2*0.9);

  var x1_11 = (r1+550) * -sin(a2*1.3);
  var y1_11 = (r1+550) * cos(a2*1.3);




  var x4 = x3+r4 * sin(a4);
  var y4 = y3+r4 * cos(a4);

  var x5 = x4 + r5 * cos(a4);
  var y5 = y4 + r5 * tan(a2);

//Center
  stroke('#32a852');
  strokeWeight(1);
  fill(random(0,255),random(0,255),random(0,255))
  ellipse(0,0,m5,m5);
// 1st ellipse
  line(0,0,x1,y1);
  fill(0);
  ellipse(x1,y1,m1,m1);
// 1st_1
    line(0,0,x1_1,y1_1);
    fill(0);
    ellipse(x1_1,y1_1,m1,m1);
// 1st_1
    line(0,0,x1_2,y1_2);
    fill(0);
    ellipse(x1_2,y1_2,m1,m1);
// 1st_1
    line(0,0,x1_3,y1_3);
    fill(0);
    ellipse(x1_3,y1_3,m1,m1);
// 1st_1
    line(0,0,x1_4,y1_4);
    fill(0);
    ellipse(x1_4,y1_4,m1,m1);
// 1st_1
    line(0,0,x1_5,y1_5);
    fill(0);
    ellipse(x1_5,y1_5,m1,m1);
// 1st_1
    line(0,0,x1_6,y1_6);
    fill(0);
    ellipse(x1_6,y1_6,m1,m1);
// 1st_1
    line(0,0,x1_7,y1_7);
    fill(0);
    ellipse(x1_7,y1_7,m1,m1);
// 1st_1
    line(0,0,x1_8,y1_8);
    fill(0);
    ellipse(x1_8,y1_8,m1,m1);
// 1st_1
    line(0,0,x1_9,y1_9);
    fill(0);
    ellipse(x1_9,y1_9,m1,m1);
// 1st_1
    line(0,0,x1_10,y1_10);
    fill(0);
    ellipse(x1_10,y1_10,m1,m1);
// 1st_1
    line(0,0,x1_11,y1_11);
    fill(0);
    ellipse(x1_11,y1_11,m1,m1);

    var x2 = x1+r2 * sin(a2);
    var y2 = y1+r2 * cos(a2);

    var x2_1 = x1 + r3 * sin(a2);
    var y2_1 = y1 + r4 * cos(a2);

    var x2_2 = x1_1 - r4 * sin(a5);
    var y2_2 = y1_1 - r4 * cos(a5);

    var x2_3 = x1_2*2 - r2 * sin(a3);
    var y2_3 = y1_2*2 - r4 * tan(a3);

    var x2_4 = x1_2*2 - r2 * -sin(a3*2);
    var y2_4 = y1_2*2 - r4 * tan(a3*2);

    var x2_5 = (x2_4+100) - r4 * sin(a5*2);
    var y2_5 = (y2_4+100) - r4 * tan(a5*2);

    var x2_6 = (x2_5-5) - r3 * sin(a1);
    var y2_6 = (y2_5-5) - r1 * cos(a3);

  stroke('#3244c9');
// 2nd
  line(x1_1,y1_1,x1_11,y1_11);
  fill(0);
  ellipse(x1_11,y1_11,m1,m1);
//2nd
  line(x1,y1,x1_4,y1_4);
  fill(0);
  ellipse(x1_4,y1_4,m1,m1);
//2nd_1
  line(x1,y1,x2_1,y2_1);
  fill(0);
  ellipse(x2_1,y2_1,m1,m1);
//2nd_2
  line(x1,y1,x1_2,y1_2);
  fill(0);
  ellipse(x1_2,y1_2,m1,m1);
//2nd_2
  line(x1,y1,x2_3,y2_3);
  fill(0);
  ellipse(x2_3,y2_3,m2,m2);
//2nd_2
  line(x2_3,y2_3,x2_4,y2_4);
  fill(0);
  ellipse(x2_4,y2_4,m2,m2);
//2nd_2
  line(x2_4,y2_4,x2_5,y2_5);
  fill(0);
  ellipse(x2_5,y2_5,m1,m1);
//2nd_2
  line(x2_5,y2_5,x2_6,y2_6);
  fill(0);
  ellipse(x2_6,y2_6,m1,m1);
//2nd_2
  line(x2_6,y2_6,x1_6,y1_6);
  fill(0);
  ellipse(x1_6,y1_6,m1,m1);
//2nd_2
  line(x1_3,y1_3,x1_6,y1_6);
  fill(0);
  ellipse(x1_6,y1_6,m1,m1);

  var x3 = x2+r3 * sin(a5);
  var y3 = y2+r3 * cos(a5);

  stroke('#ed791a');
//3rd
  line(x1_6,y1_6,x3,y3);
  fill(0);
  ellipse(x3,y3,m1,m1);
//4th
  line(x3,y3,x4,y4);
  fill(0);
  ellipse(x4,y4,m4,m4);
//4th_1
  line(x3,y3,x2_6,y2_6);
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
//5th_1
  line(x5,y5,x1,y1);
  fill(0);
  ellipse(x1,y1,m2,m2);

  a1_v += a1_a;  //a1_a
  a2_v -= a2_a;  //a2_a
  // a3_v -= 10;

// angle = velocity of rotation
  a1 += 0.1; //a1_v
  a2 -= 0.006; //a2_v
  a3 *= 0.1;
  a4 += 0.02;

  // a1_v *= 0.9;
  // a2_v *= 0.9;
pop();

// push();
// //right
//   let R_a1 = 3.14159265358979323846/2;
//   let R_a2 = 3.14159265358979323846/3;
//   let R_a3 = 3.14159265358979323846/14;
//   let R_a4 = 3.14159265358979323846/7;
//   let R_a5 = 3.14159265358979323846/9;
//
//
//
//   // velocity of rotation
//   let R_a1_v = 0;
//   let R_a2_v = 0;
//   let R_g = 1;
//
//   let R_num1 = -R_g * (2 * m1 + m2) * sin(R_a1);
//   let R_num2 = -m2 * R_g * sin(R_a1-2*R_a2);
//   let R_num3 = -2*sin(R_a1-R_a2)*m2;
//   let R_num4 = R_a2_v*R_a2_v*r2+R_a1_v*R_a1_v*r1*cos(R_a1-R_a2);
//   let R_den = r1 * (2*m1+m2-m2*cos(2*R_a1-2*R_a2));
//
//   let R_a1_a = (R_num1 + R_num2 + R_num3*R_num4) / R_den;
//   let R_a2_a = 0;
//   // let R_a1_v = 0;
//   // let R_a2_v = 0;
//
//   // velocity of rotation
//
//
//   var R_x1 = r2 * sin(R_a1);
//   var R_y1 = r2 * cos(R_a1);
//
//   // translate(width4/5,height/3);
// //rotate
//   line(0,0,R_x1,R_y1);
//   fill(0);
//   ellipse(R_x1,R_y1,m1,m1);
// // //1st
// //   line(width*2/5,100,x1,y1);
// //   fill(0);
// //   ellipse(width*2/5,100,m1,m1);
// // //1st
// //   line(width*2/5,100,x3,y3);
// //   fill(0);
// //   ellipse(x3,y3,m1,m1);
// //
// //   line(x3,y3,x1,y1);
// //   fill(0);
// //   ellipse(x1,y1,m2,m2);
//
//   R_a1_v += R_a1_a;  //a1_a
//   R_a2_v -= R_a2_a;  //a2_a
//
//   // angle = velocity of rotation
//     R_a1 += 0.02; //a1_v
//     R_a2 -= 0.01; //a2_v
//     R_a3 *= 0.1;
//     R_a4 += 0.02;
// pop();




}

//
// function mousePressed (){
//   for (var i = 0; i < 11; i++) {
//     line(x[random(0,i)],y[i],x[i+1],y[i+1]);
//     fill(0);
//     ellipse(x(random(0,5)),y(random(0,5)),m2,m2);
//   }
// }
