onerror = (e) => {
    alert(e)
}

const canvas = document.getElementById("gamecanvas")
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
cx = canvas.width/2
cy = canvas.height/2

class player {
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
        //player
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.w, this.h)
        c.resetTransform()
    }
}

//shapes
var player1 = new player(0,cy,50,25,0,"blue")
var player2 = new player(1300,cy,50,25,Math.PI,"red")
//for collision
//needle1 (player1.x,player1.y+player1.h*3/8,player1.w*2,player1.h/4,player1.rot,"white")
//needle2 (player2.x,player2.y+player2.h*3/8,player2.w*2,player2.h/4,player2.rot,"white")

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
    player1.draw()
    player2.draw()
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
    var totalspeed = (player1.speed/750)
    if (keys['w']) if (player1.speed < 750) player1.speed+=250*deltatime 
    if (keys[' ']) if (Math.abs(player1.speed) > 0) player1.speed = movetoward(player1.speed, 0, 500*deltatime)
    if (keys['s']) if (player1.speed > -750) player1.speed-=500*deltatime
    if (keys['d']) player1.rot+=7*totalspeed*deltatime
    if (keys['a']) player1.rot-=7*totalspeed*deltatime
    //move one step
    player1.y+=Math.sin(player1.rot)*player1.speed*deltatime
    player1.x+=Math.cos(player1.rot)*player1.speed*deltatime
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
