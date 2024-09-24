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
    movment()
    playr1.draw()
    playr2.draw()
    collision()
    vertDebug()
    requestAnimationFrame(newframe)
}




function drawCirc(x,y,radius){
    c.beginPath();
    c.strokeStyle = "white"
    c.arc(x,y,radius, 0, 2 * Math.PI);
    c.stroke();
}
function vertDebug(){
    center = {x:playr1.x+playr1.w/2,y:playr1.y+playr1.h/2}
    drawCirc(center.x,center.y,5)
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})