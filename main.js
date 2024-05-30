const canvas = document.getElementById("gamecanvas")
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
var needle = {
    x: 0,
    y: 0,
    rot: 0,
    speed: 0,
    type: 0,
}
var player = {
    h: 25,
    w: 50,
    x: 0,
    y: 0,
    rot: 0,
    speed: 0,
}
function rotate(h, w, x, y, rotation){
    c.translate(x + w / 2, y + h / 2);
    c.rotate(rotation)
    c.translate(-(x +w / 2), -(y +h / 2));
}
requestAnimationFrame(newframe)
function newframe() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    rotate(player.h, player.w, player.x, player.y, player.rot)
    c.fillStyle = 'red'
    //c.fillRect(0,0,100,100)
    c.fillRect(player.x, player.y, player.w, player.h)
    c.resetTransform()
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
var turnspeed = (player.speed/5)*0.05
function movment() {
    var turnspeed = (player.speed/5)*0.05
    if (keys['w']) if (player.speed < 30) player.speed+=0.5
    if (keys['s']) if (player.speed > 0) player.speed-=1
    if (keys['d']) player.rot+=turnspeed
    if (keys['a']) player.rot-=turnspeed
    player.y+=Math.sin(player.rot)*player.speed
    player.x+=Math.cos(player.rot)*player.speed
}