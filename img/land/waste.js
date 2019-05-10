

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();



var canvas, ctx;
var width, height;
var freq = .09;
var offsetX = 20;
var perlin;
var xstart = Math.random()*20;
var ystart = Math.random()*20;

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

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();

console.log(color);

var startnum = Math.floor(Math.random() * 20+1);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}

console.log(startnum);

function draw() {
  requestAnimFrame(draw)
  
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect (0, 0, width, height);


  ctx.fillStyle = color;
  
  xstart = 10;
  ystart -= startnum;
  

  ctx.save();
  ctx.translate(width/2, height/2);
  ynoise = ystart;
  for (var x = -(width/2)/offsetX; x < (width/2)/offsetX; x++) {
    ynoise += 5;
    xnoise = xstart;
    for (var y = -40; y < 40; y++) {
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