var mouseX = 0;
var mouseY = 0;
var left = false;
var right = false;
var jump = false;

document.onmousemove = function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}


var keyPress = {};
var keyDown = {};
var keyRelease = {};
for(var i=0; i<255; i++){
    var l = String.fromCharCode(i);
    keyPress[l] = false;
    keyRelease[l] = false;
    keyDown[l] = false;
}

document.onkeypress = function(event){
     var key = (event.key);
     console.log(event.key);
     if(!keyDown[key]){
        keyDown[key] = true;
        keyPress[key] = true;
     }
}
document.onkeyup = function(event){
    var key = (event.key);
    keyDown[key] = false;
    keyRelease[key] = true;
    if(key == "ArrowRight"){
        right = false;
        console.log(key, "real")
    }
    if(key == "ArrowLeft"){
        left = false;
        console.log(key, "real")
    }
    if(key == "ArrowUp"){
        jump = false;
        console.log(key, "real")
    }
}

function keyEnd(){
    for(var i in keyPress) {
        keyPress[i] = false;
        keyRelease[i] = false;
    }
}

document.body.addEventListener("keydown", function(event) {
		switch(event.keyCode) {
			case 37: // left
				if(event.key) {
                    left = true;
				}
                break	
			case 39: // right
				if(event.key) {
					right = true;
				}
                break
			case 38: // up
				if(event.key && y_coli) {
                    jump = true
				}
            }
		}
	);