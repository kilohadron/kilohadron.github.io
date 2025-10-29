const controls = [
    {up:'e',down:'d',left:'s',right:'f',special:'z'},
    {up:'i',down:'k',left:'j',right:'l',special:'/'}
]
const p1 = {
    speed:0,
    body:new Box('Indigo',25,resolution.height/2,25,50),
    needle:new Box('cornsilk',0,0,9,50),
    draw:function(){
        this.needle.x = this.body.x
        this.needle.y = this.body.y
        this.needle.r = this.body.r
        this.needle.slide(this.body.w/2+this.needle.w/2)
        this.body.draw()
        this.needle.draw()
    },
    move:function(){
        ifOnEdgeBounce(this)
        if(keys[controls[0].special]){
            this.speed /= 1.1
        }
        else{
            this.speed += keys[controls[0].up]&&!keys[controls[0].down]?1:keys[controls[0].down]&&!keys[controls[0].up]?-1:0
        }
        if(keys[controls[0].left]){
            this.body.r -= Math.PI/180 *5
        }    
        if(keys[controls[0].right]){
            this.body.r += Math.PI/180 *5
        }  
        this.body.slide(this.speed)
        
    }
}

const p2 = {
    speed:0,
    body:new Box('crimson',resolution.width-25,resolution.height/2,25,50),
    needle:new Box('cornsilk',0,0,9,50),
    draw:function(){
        this.needle.x = this.body.x
        this.needle.y = this.body.y
        this.needle.r = this.body.r
        this.needle.slide(this.body.w/2+this.needle.w/2)
        this.body.draw()
        this.needle.draw()
    },
    move:function(){
        ifOnEdgeBounce(this)
        if(keys[controls[1].special]){
            this.speed /= 1.1
        }
        else{
            this.speed += keys[controls[1].up]&&!keys[controls[1].down]?1:keys[controls[1].down]&&!keys[controls[1].up]?-1:0
        }
        if(keys[controls[1].left]){
            this.body.r -= Math.PI/180 *5
        }    
        if(keys[controls[1].right]){
            this.body.r += Math.PI/180 *5
        }  
        this.body.slide(this.speed)
        
    }
}
p2.body.r = Math.PI 
requestAnimationFrame(main);
