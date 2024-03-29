class Ground{
    constructor (x,y,w,h) {
        var ground_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(3);
        stroke("orange");
        fill("yellow");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}