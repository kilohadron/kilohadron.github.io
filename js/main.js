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
    movement()
    playr1.draw()
    playr2.draw()
    collision(playr1,playr2)
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
    drawCirc(playr1.vert[0].x,playr1.vert[0].y,5)
    drawCirc(playr1.vert[1].x,playr1.vert[1].y,5)
    drawCirc(playr1.vert[2].x,playr1.vert[2].y,5)
    drawCirc(playr1.vert[3].x,playr1.vert[3].y,5)
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})















