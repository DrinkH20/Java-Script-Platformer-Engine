function rectangle(x, y, w, h){
    render.beginPath();
    render.rect(x / zoom + off_x/ 2 + (mouseX-(innerWidth/2))/10, y / zoom + off_y/2 + (mouseY-(innerHeight/2))/10, w / zoom, h / zoom)
    render.fill();
    render.stroke();
}

function generate_rand(range) {
    return Math.floor(Math.random() * range);
}

function fillColor(r, g, b){
    r = String(r);
    g = String(g);
    b = String(b);
    render.fillStyle = "rgb("+r+", "+g+", "+b+")";
}

function strokeSize(size){
    render.lineWidth = String(size / zoom);
}

function background(r, g, b){
    fillColor(r, g, b);
    render.beginPath();
    render.rect(0, 0, width, height);
    render.fill();
    render.stroke();
}

function strokeColor(r, g, b){
    r = String(r);
    g = String(g);
    b = String(b);
    render.strokeStyle = "rgb("+r+", "+g+", "+b+")";
}


function noStroke(){
    render.strokeStyle = "rgba(0, 0, 0, 0)"
}

function noFill(){
    render.fillStyle = "rgba(0, 0, 0, 0)"
}

function line(x1, y1, x2, y2){
    render.beginPath();
    render.moveTo(x1, y1);
    render.lineTo(x2, y2);
    render.stroke();
}

function circle(x, y, r){
    render.beginPath();
    render.arc(x, y, r, 0, 2*Math.PI)
    render.fill();
    render.stroke();
}
