var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d")
var width;
var height;
var off_x = 0;
var oof_y = 0;
var ais = 5;

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function(){
    width = window.innerWidth - 15;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    off_x = window.innerWidth/2;
    off_y = window.innerHeight/2;
    drawLoop();
}

function loop() {
    stepLoop();
    drawLoop();
    keyEnd();
}

var objects = [];


for(var i=0; i<40; i++){
    new wall(i*20 - 405, 100);
}

for(var i=0; i<20; i++){
    new wall(-405, i*20 + -300);
}

for(var i=0; i<20; i++){
    new wall(375, i*20 + -300);
}

new wall(20, 40);
new wall(40, 40);
new wall(60, 40);
new wall(120, 0);
new wall(140, 0);
new wall(160, 0);
new wall(220, -40);
new wall(240, -40);
new wall(260, -40);
new wall(0, 40);
new wall(-20, 40);
new wall(-40, 40);
new wall(-60, 40);
new wall(-120, 0);
new wall(-140, 0);
new wall(-160, 0);
new wall(-220, -40);
new wall(-240, -40);
new wall(-260, -40);


for(var i=0; i<ais; i++){
    var Enemy = new enemys(300, -250);
}

var Player = new player(-300, -250);
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
