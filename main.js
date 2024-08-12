onerror = (e) => {
    alert(e)
}

const canvas = document.getElementById("gamecanvas")
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
cx = canvas.width/2
cy = canvas.height/2

class playr {
    constructor(x, y, w, h, rot, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rot = rot
        this.color = color
        this.speed = 0
    }
    draw() {
        rotate(this.h, this.w, this.x, this.y, this.rot)
        //needle
        c.fillStyle = 'white'
        c.fillRect(this.x, this.y + this.h * 3 / 8, this.w * 2, this.h / 4)
        //playr
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.w, this.h)
        c.resetTransform()
    }
}

//shapes
var playr1 = new playr(0,cy,50,25,0,"blue")
var playr2 = new playr(canvas.width-60,cy,50,25,Math.PI,"red")
//for collision
//needle1 (playr1.x,playr1.y+playr1.h*3/8,playr1.w*2,playr1.h/4,playr1.rot,"white")
//needle2 (playr2.x,playr2.y+playr2.h*3/8,playr2.w*2,playr2.h/4,playr2.rot,"white")

function rotate(h, w, x, y, rotation){
    c.translate(x + w / 2, y + h / 2);
    c.rotate(rotation)
    c.translate(-(x +w / 2), -(y +h / 2));
}

var lastframetime = Date.now()
var deltatime = 0;

requestAnimationFrame(newframe)
function newframe() {
    //delta time
    deltatime = (Date.now() - lastframetime) / 1000
    lastframetime = Date.now()
    //delta time
    c.clearRect(0, 0, canvas.width, canvas.height);
    playr1.draw()
    playr2.draw()
    movment()
    requestAnimationFrame(newframe)
}
//movement scripts
var keys = []

addEventListener('keydown', (e) => {
    keys[e.key] = true
})

addEventListener('keyup', (e) => {
    keys[e.key] = false
})
function movment() {
    var totalspeed = (playr1.speed/750)
    if (keys['w']) if (playr1.speed < 750) playr1.speed+=250*deltatime 
    if (keys[' ']) if (Math.abs(playr1.speed) > 0) playr1.speed = movetoward(playr1.speed, 0, 500*deltatime)
    if (keys['s']) if (playr1.speed > -1250) playr1.speed-=500*deltatime
    if (keys['d']) playr1.rot+=7*totalspeed*deltatime
    if (keys['a']) playr1.rot-=7*totalspeed*deltatime
    //move one step
    playr1.y+=Math.sin(playr1.rot)*playr1.speed*deltatime
    playr1.x+=Math.cos(playr1.rot)*playr1.speed*deltatime
}
function movetoward(current, target, speed) {
    var dir = Math.sign(target - current)
    var dist = Math.abs(target - current)
    if (dist <= speed) return target
    return current + dir * speed
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
