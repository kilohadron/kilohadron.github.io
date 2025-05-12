blue = {
    sprite:new rect({x:20,y:canvas.height/2,h:10,w:20,r:0,color:"blue"}),
    speed:0,
    spike:new rect({x:0,y:0,h:2.5,w:26,r:0,color:"white"}),
    control:function(){
        this.sprite.r += (keys[controls[0].right] ? Math.PI/180*this.speed/3 : 0) - (keys[controls[0].left] ? Math.PI/180*this.speed/3 : 0);
        this.speed += (keys[controls[0].up] && this.speed <= 25 ? 1 : 0) - (keys[controls[0].down]&&this.speed<= 25 ? 1 : 0);
        this.speed /= (keys[' '] ? 1.5 : 1);
        this.sprite.slide(this.speed)
        this.spike.x = this.sprite.x + Math.cos(this.sprite.r)*this.sprite.w*2
        this.spike.y = this.sprite.y + Math.sin(this.sprite.r)*this.sprite.w*2
        this.spike.r = this.sprite.r
    },
    draw:function(){
        this.sprite.draw();
        this.spike.draw();
    }
}

red = {
    sprite:new rect({x:canvas.width-20,y:canvas.height/2,h:10,w:20,r:180,color:"red"}),
    speed:0,
    spike:new rect({x:0,y:0,h:2.5,w:26.25,r:0,color:"white"}),
    control:function(){
        this.sprite.r += (keys[controls[1].right] ? Math.PI/180*this.speed/3 : 0) - (keys[controls[1].left] ? Math.PI/180*this.speed/3 : 0);
        this.speed += (keys[controls[1].up]&&this.speed<= 25 ? 1 : 0) - (keys[controls[1].down]&&this.speed<= 25 ? 1 : 0);
        this.speed /= (keys['Shift'] ? 1.5 : 1);
        this.sprite.slide(this.speed)
        this.spike.x = this.sprite.x + Math.cos(this.sprite.r)*this.sprite.w*2
        this.spike.y = this.sprite.y + Math.sin(this.sprite.r)*this.sprite.w*2
        this.spike.r = this.sprite.r
    },
    draw:function(){
        this.sprite.draw();
        this.spike.draw();
    }
}