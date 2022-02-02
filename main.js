var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d")
var width;
var height;

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function(){
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    drawLoop();
}

function loop() {
    stepLoop();
    drawLoop();
    keyEnd();
}

var objects = [];


for(var i=0; i<40; i++){
    new wall(i*20, 600);
}

for(var i=0; i<20; i++){
    new wall(0, i*20 + 200);
}

for(var i=0; i<20; i++){
    new wall(780, i*20 + 200);
}


var Player = new player(50, 50);
window.onresize();

function stepLoop(){
    for(var i=0; i<objects.length; i++) {
        if(objects[i].step) objects[i].step();
    }
}

function drawLoop() {
    background(25, 25, 25);
    for(var i=0; i<objects.length; i++) {
        if(objects[i].draw) objects[i].draw();
    }
}

var target_fps = 30;
setInterval(loop, 1000/target_fps);
