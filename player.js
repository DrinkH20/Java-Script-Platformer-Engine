var y_coli = false;

class player{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.bbx = new bbox(this.x, this.y, this.size, this.size);

        this.gravity = .3;
        this.yvel = 0;
        this.xvel = 0;

        objects.push(this);
    }
    step() {

        if(keyDown.Z) {
            zoom += .05;
        }

        if(keyDown.z) {
            zoom += -.05;
        }

        if(keyDown.d || right) {
            this.xvel += .7;
        }

        if(keyDown.a || left) {
            this.xvel += -.7;
        }

        this.xvel = this.xvel * .9
        this.x += this.xvel;

        if(wallCollision(this.bbx, this.x, this.y)) {
            this.x += this.xvel * -1;
            this.xvel = 0;
        }

        this.yvel += this.gravity;

        if(this.yvel>20){
            this.yvel = 20;
        }

        this.y += this.yvel;

        if(wallCollision(this.bbx, this.x, this.y)) {
            this.y += this.yvel * -1;
            this.yvel = 0;
        }

        y_coli = false;

        if(wallCollision(this.bbx, this.x, this.y + 2)) {
            y_coli = true;

            if(keyDown.w){
                this.yvel = -8
            }

            if(jump){
                this.yvel = -8;
            }
        }

        this.bbx.update(this.x, this.y)
    }
    draw() {
        strokeColor(255, 255, 255);
        strokeSize(3);
        fillColor(255, 255, 255);
        noFill();
        rectangle(this.x, this.y, this.size, this.size)
    }

    get_posX() {
        return this.x;
    }

    get_posY() {
        return this.y;
    }
}
