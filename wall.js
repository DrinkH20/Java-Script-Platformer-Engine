var walls = [];
class wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.bbx = new bbox(this.x, this.y, this.size, this.size);
        this.red_amount = generate_rand(255);
        this.blue_amount = generate_rand(255);

        objects.push(this);
        walls.push(this);
    }
    draw() {
        strokeColor(this.red_amount, 255, this.blue_amount);
        noFill();
        strokeSize(2);
        rectangle(this.x, this.y, this.size, this.size);
    }
}

function wallCollision(bbx, x, y) {
    var lastX = bbx.x1;
    var lastY = bbx.y1;
    bbx.update(x, y);
    var ret = false;
    for(var i=0; i<walls.length; i++) {
        if(walls[i].bbx.collision(bbx)) {
            ret = true;
            break;
        }
    }

    bbx.update(lastX, lastY);
    return ret;
}