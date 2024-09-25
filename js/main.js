onerror = (e, source, line, col, err) => {
    alert(`error in ${source} on line ${line}, ${err}`)
}


const canvas = document.getElementById("gamecanvas")
const c = canvas.getContext('2d')



canvas.width = window.innerWidth
canvas.height = window.innerHeight
cx = canvas.width/2
cy = canvas.height/2



var lastframetime = Date.now()
var deltatime = 0

requestAnimationFrame(newframe)
function newframe() {
    //delta time
    deltatime = (Date.now() - lastframetime) / 1000
    lastframetime = Date.now()
    //delta time
    c.clearRect(0, 0, canvas.width, canvas.height)
    //movement(playr1)
    movement(playr2)
    playr1.draw()
    playr2.draw()
    collision(playr1,playr2)
    vertDebug(playr1)
    vertDebug(playr2)
    requestAnimationFrame(newframe)
}




function drawCirc(x,y,radius){
    c.beginPath();
    c.strokeStyle = "white"
    c.arc(x,y,radius, 0, 2 * Math.PI);
    c.stroke();
}
function vertDebug(box){
    drawCirc(box.vert[0].x,box.vert[0].y,1)
    drawCirc(box.vert[1].x,box.vert[1].y,1)
    drawCirc(box.vert[2].x,box.vert[2].y,1)
    drawCirc(box.vert[3].x,box.vert[3].y,1)
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})


















const distance = (p1,p2) => Math.sqrt((Math.pow((p2.x-p1.x),2) + Math.pow((p2.y-p1.y),2)))
class playr {
    constructor(x, y, w, h, rot, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rot = rot
        this.color = color
        this.speed = 0
        this.center = {x:0,y:0}
        this.vert = []
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
function rotate(h, w, x, y, rotation){
    c.translate(x + w / 2, y + h / 2)
    c.rotate(rotation)
    c.translate(-(x +w / 2), -(y +h / 2))
}
var playr1 = new playr(0,cy,50,25,0,"blue")
var playr2 = new playr(canvas.width-60,cy,50,25,Math.PI,"red")

function movement(box) {
    if (box.center.x<0||box.center.y<0||box.center.x>canvas.width||box.center.y>canvas.height) {box.rot = Math.atan2(canvas.height/2-box.y,canvas.width/2-box.x)
    box.speed = 750}
    var totalspeed = (box.speed/750)
    if (keys['w']) if (box.speed < 750) box.speed+=250*deltatime 
    if (keys[' ']) if (Math.abs(box.speed) > 0) box.speed = movetoward(box.speed, 0, 500*deltatime)
    if (keys['s']) if (box.speed > -1250) box.speed-=500*deltatime
    if (keys['d']) box.rot+=7*totalspeed*deltatime
    if (keys['a']) box.rot-=7*totalspeed*deltatime
    //move one step
    box.y+=Math.sin(box.rot)*box.speed*deltatime
    box.x+=Math.cos(box.rot)*box.speed*deltatime
}
function movetoward(current, target, speed) {
    var dir = Math.sign(target - current)
    var dist = Math.abs(target - current)
    if (dist <= speed) return target
    return current + dir * speed
}


//movement scripts
var keys = []

addEventListener('keydown', (e) => {
    keys[e.key] = true
})

addEventListener('keyup', (e) => {
    keys[e.key] = false
})
