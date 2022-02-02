class player{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.bbx = new bbox(this.x, this.y, this.size, this.size);

        this.gravity = 2;
        this.yvel = 0;
        this.xvel = 0;

        objects.push(this);
    }
    step() {
        if(keyDown.D) {
            this.xvel += 2
        }

        if(keyDown.A) {
            this.xvel += -2
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

        if(keyDown.W && wallCollision(this.bbx, this.x, this.y + 1)) {
            this.yvel = -20
        }
        this.bbx.update(this.x, this.y)
    }
    draw() {
        strokeColor(200, 200, 255);
        strokeSize(3);
        fillColor(100, 100, 200)
        // noFill();
        rectangle(this.x, this.y, this.size, this.size)
    }
}
