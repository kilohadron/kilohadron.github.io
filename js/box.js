class Box{
    constructor(color,x,y,h,w,verts){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = color;
        this.r = 0;
      	this.xnew = 0;
      	this.ynew = 0;
        if(verts==null){
            this.verts = [
                [-this.w/2,this.h/2 ],
                [this.w/2,this.h/2  ],
                [this.w/2,-this.h/2 ],
                [-this.w/2,-this.h/2]
            ];
        }
        else{
            this.verts = verts;
        }
        this.oddVerts = this.verts.length%2 !== 0;
        this.dVerts = structuredClone(this.verts);
        this.axis = [];
        
    }
    draw(){
        this.rotate();
        c.fillStyle = this.color;
        c.beginPath();
        c.moveTo(this.verts[0].x,this.verts[0].y);
        for(let i = 0; i < this.verts.length; i++){
            c.lineTo(this.verts[i][0]/scaleX,this.verts[i][1]/scaleY);
        }
        c.closePath();
        c.fill();
    }
    rotate(){
        this.verts = structuredClone(this.dVerts);
        for(let i = 0; i < this.verts.length; i++){
            this.xnew = this.verts[i][0] * Math.cos(this.r) - this.verts[i][1] * Math.sin(this.r);
            this.ynew = this.verts[i][0] * Math.sin(this.r) + this.verts[i][1] * Math.cos(this.r);
            this.verts[i][0] = this.xnew + this.x;
            this.verts[i][1] = this.ynew + this.y;
        }

        this.axis.push(normalize([
            -(this.verts[1][1] - this.verts[0][1]),
            this.verts[1][0] - this.verts[0][0],
        ]));
        this.axis.push(normalize([
            -(this.verts[2][1] - this.verts[1][1]),
            this.verts[2][0] - this.verts[1][0],
        ]));
    }
    slide(x){
        this.x += Math.cos(this.r)*x;
        this.y += Math.sin(this.r)*x;
    }
}
