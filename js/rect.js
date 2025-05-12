class rect{
    constructor(obj){
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;
        this.r = obj.r*Math.PI/180;
        this.color = obj.color
        this.verts = [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}];
        this.axis = [{x:0,y:0},{x:0,y:0}];
    }
    rotate() {
        for(let i = 0; i < this.verts.length; i++){
            this.verts[i].x -= this.x;
            this.verts[i].y -= this.y;
            let xnew = this.verts[i].x * Math.cos(this.r) - this.verts[i].y * Math.sin(this.r)
            let ynew = this.verts[i].x * Math.sin(this.r) + this.verts[i].y * Math.cos(this.r)
            this.verts[i].x = xnew + this.x;
            this.verts[i].y = ynew + this.y;
        }
        this.axis[0] = normalize({ y: this.verts[0].y - this.verts[1].y, x: this.verts[0].x - this.verts[1].x });
        this.axis[1] = normalize({ y: -this.axis[0].x, x: this.axis[0].y });
    }
    draw(){
        this.verts = [{x:this.x-this.w,y:this.y-this.h},{x:this.x+this.w,y:this.y-this.h},{x:this.x+this.w,y:this.y+this.h},{x:this.x-this.w,y:this.y+this.h}];
        this.rotate();
        c.beginPath();
        c.moveTo(this.verts[0].x,this.verts[0].y);
        c.lineTo(this.verts[1].x,this.verts[1].y);
        c.lineTo(this.verts[2].x,this.verts[2].y);
        c.lineTo(this.verts[3].x,this.verts[3].y);
        c.lineTo(this.verts[0].x,this.verts[0].y);
        c.fillStyle = this.color;
        c.fill();
    }
    slide(x){
        this.x += Math.cos(this.r)*x;
        this.y += Math.sin(this.r)*x;
    }
}

const controls = [{up:"w",down:"s",left:"a",right:"d",},{up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",}];