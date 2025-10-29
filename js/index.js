"use strict";
const canvas = document.getElementById("c");
const c = canvas.getContext("2d");

onerror = (e) => {
    alert(e)
}

canvas.width = window.innerWidth
canvas.height = window.innerHeight
c.imageSmoothingEnabled = false
const resolution = {height:1080,width:1920}
var scaleX = resolution.width/canvas.width
var scaleY = resolution.height/canvas.height

window.addEventListener('resize',() =>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    c.imageSmoothingEnabled = false
    scaleX = resolution.width/canvas.width
    scaleY = resolution.height/canvas.height
})
var keys = []
onkeydown = (e) => {
    keys[e.key] = true
}
onkeyup = (e) => {
    keys[e.key] = false
}
var win = [false,false]
function main(){
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    p2.draw();
    p1.draw();
    p2.move();
    p1.move();
    win[0] = collision(p2.body,p1.needle)
    win[1] = collision(p1.body,p2.needle)
    winCheck()
    requestAnimationFrame(main)
}
function winCheck(){
    if(win[0]&&win[1]){
        alert('tie')
    }
    else if(win[0]){
        alert('blue win')
    }
    else if(win[1]){
        alert('red win')
    }
    else{
        return
    }
    p2.body.x = resolution.width-25
    p2.body.y = resolution.height/2
    p2.body.r = Math.PI
    p2.speed = 0
    p1.body.x = 25
    p1.body.y = resolution.height/2
    p1.body.r = 0
    p1.speed = 0
}
