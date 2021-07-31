class Cannon {

    constructor(x, y, width, height, angle) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display() {
        push();
        translate(this.x,this.y);
        rotate(angle);
        rect(100,-60,this.width,this.height);
        pop();
        arc(this.x-10,this.y,150,200,PI,TWO_PI);                        
    }
}