import { io } from "socket.io-client"
const canvas = document.getElementById("gamecanvas")
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
cx = canvas.width/2
cy = canvas.height/2
class shape {
    constructor(x, y, w, h, rot, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rot = rot
        this.color = color
    }
    draw() {
        rotate(this.h, this.w, this.x, this.y, this.rot)
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.w, this.h)
        c.resetTransform()
    }
}
const socket = io('http://localhost:3000')
var player1 = new shape(0,cy,50,25,0,"blue")
player1.speed = 0
var player2 = new shape(1300,cy,50,25,0,"red")


function rotate(h, w, x, y, rotation){
    c.translate(x + w / 2, y + h / 2);
    c.rotate(rotation)
    c.translate(-(x +w / 2), -(y +h / 2));
}
requestAnimationFrame(newframe)
function newframe() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw()
    player2.draw()
    movment()
    requestAnimationFrame(newframe)
}

var keys = []

addEventListener('keydown', (e) => {
    keys[e.key] = true
})

addEventListener('keyup', (e) => {
    keys[e.key] = false
})

function movetoward(current, target, speed) {
    var dir = Math.sign(target - current)
    var dist = Math.abs(target - current)
    if (dist <= speed) return target
    return current + dir * speed
}

var turnspeed = (player1.speed/5)*0.05
function movment() {
    var turnspeed = (player1.speed/5)*0.05

    if (keys['w']) if (player1.speed < 20) player1.speed+=0.5
    if (keys[' ']) if (Math.abs(player1.speed) > 0) player1.speed = movetoward(player1.speed, 0, 1)
    if (keys['s']) if (player1.speed > -20) player1.speed-=1
    if (keys['d']) player1.rot+=turnspeed
    if (keys['a']) player1.rot-=turnspeed
    //move one step
    player1.y+=Math.sin(player1.rot)*player1.speed
    player1.x+=Math.cos(player1.rot)*player1.speed
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})