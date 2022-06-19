// var canvas = document.querySelector('canvas'),
//       ctx = canvas.getContext('2d'),
//       colorDot = '#CECECE',
//       color = '#CECECE';


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight


// var canvasDots = function() {
  
//   canvas.style.display = 'block';
//   ctx.fillStyle = colorDot;
//   ctx.lineWidth = .1;
//   ctx.strokeStyle = color;

//   var mousePosition = {
//       x: 30 * canvas.width / 100,
//       y: 30 * canvas.height / 100
//   };

//   var dots = {
//       nb: 900,
//       distance: 60,
//       d_radius: 100,
//       array: []
//   };

//   function Dot(){
//       this.x = Math.random() * canvas.width;
//       this.y = Math.random() * canvas.height;

//       this.vx = -.5 + Math.random();
//       this.vy = -.5 + Math.random();

//       this.radius = Math.random();
//   }

//   Dot.prototype = {
//       create: function(){
//           ctx.beginPath();
//           ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//           ctx.fill();
//       },

//       animate: function(){
//           for(i = 0; i < dots.nb; i++){

//               var dot = dots.array[i];

//               if(dot.y < 0 || dot.y > canvas.height){
//                   dot.vx = dot.vx;
//                   dot.vy = - dot.vy;
//               }
//               else if(dot.x < 0 || dot.x > canvas.width){
//                   dot.vx = - dot.vx;
//                   dot.vy = dot.vy;
//               }
//               dot.x += dot.vx;
//               dot.y += dot.vy;
//           }
//       },

//       line: function(){

          
//           for(i = 0; i < dots.nb; i++){
//               for(j = 0; j < dots.nb; j++){
//                   i_dot = dots.array[i];
//                   j_dot = dots.array[j];

//                   if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//                       if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
//                           ctx.beginPath();
//                           ctx.moveTo(i_dot.x, i_dot.y);
//                           ctx.lineTo(j_dot.x, j_dot.y);
//                           ctx.stroke();
//                           ctx.closePath();
//                       }
//                   }
//               }
//           }
//       },

      
      
//   };

//   function createDots(){
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for(i = 0; i < dots.nb; i++){
//           dots.array.push(new Dot());
//           dot = dots.array[i];

//           dot.create();
//       }

//       dot.line();
//       dot.animate();
//   }

// //   window.onmousemove = function(parameter) {
// //       mousePosition.x = parameter.pageX;
// //       mousePosition.y = parameter.pageY;
// //   }

// //   mousePosition.x = window.innerWidth / 2;
// //   mousePosition.y = window.innerHeight / 2;

//   setInterval(createDots, 1000/30);
// };

// window.onload = function() {
//   canvasDots();
// };
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 75, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = "lighter";
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
  }
  
  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x,starI.y); 
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if(distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y); 
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

function distance( point1, point2 ){
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;
    
    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();