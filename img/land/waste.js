

// Creating animation frame within the brower.

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    // Create timeout

    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Defining variables and some values for the effect

var canvas, ctx;
var width, height;
var freq = .09;
var offsetX = 20;
var perlin;
var xstart = Math.random()*20;
var ystart = Math.random()*20;

// setting up the effect by generating the canvas using perlin noise. Draw the canvas.

function setup() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
    perlin = new SimplexNoise();
    canvas.width = width;
    canvas.height = height;

    draw();
}

// Randombly generate a random RGBA value for the effect. 

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// Same as above, but generates a background color for the effect.  

function random_rgba_bg() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(0.5) + ')';
}


// Assign the random RGBA to the color and bg color variable

var color = random_rgba();

var bgcolor = random_rgba_bg();

// Log color value for testing.

console.log(color);

// Set starnum variabl

var startnum = Math.floor(Math.random() * 20+1);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}

// log starnum to the console for testing

console.log(startnum);

// fully draw the frame

function draw() {
  requestAnimFrame(draw)
  
  // establish color of the background

  ctx.fillStyle = bgcolor
  ctx.fillRect (0, 0, width, height);

  // create the color of the main effect using color variable defined above, starting on line 45

  ctx.fillStyle = color;
  
  // establish some variables that are used to draw the effect. These will change the overall appearance. 

  xstart = 10;
  ystart -= startnum;
  
  // Generating the size of the effect, it doesn't have to use the whole window. 

  ctx.save();
  ctx.translate(width/2, height/2);
  ynoise = ystart;
  for (var x = -(width/2)/offsetX; x < (width/2)/offsetX; x++) {
    ynoise += 5;
    xnoise = xstart;

    // changing x andy y variables changes the size of the effect vertically. 

    for (var y = -45; y < 45; y++) {
        xnoise += .5;
        var size = perlin.noise2D(xnoise, ynoise);
        var pointX = perlin.noise2D(x*freq, y*freq)+x;
        var pointY = perlin.noise2D(x*freq, y*freq)+y;

        ctx.fillRect(pointX*offsetX,pointY*10 ,size*40, size*2);
    }
}
  ctx.restore();
}
setup();