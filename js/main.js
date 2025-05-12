const canvas = document.getElementById('gamecanvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.imageSmoothingEnabled = false;
onerror = (message, source, lineno, colno, error) => {
    alert(`Error: ${message} at ${source}:${lineno}:${colno}`);
};

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.imageSmoothingEnabled = false;
});

var keys = [];

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
freeze = false;
function main(){
    c.clearRect(0,0,canvas.width,canvas.height);
    if(!freeze){
    blue.control();
    red.control();
    ifOnEdgeBounce(blue);
    ifOnEdgeBounce(red);
    blue.draw();
    red.draw();
    }
    c.font = "50px Arial";
    winCondition();
}

function winCondition(){
    blueWin = collision(red.sprite,blue.spike);
    redWin = collision(red.spike,blue.sprite);
    if(blueWin||redWin){
        if(Math.abs(red.speed-blue.speed)<2){
            c.fillStyle = "white";
            c.fillText("Draw",canvas.width/2-100,canvas.height/2);
            freeze=true;
        }
        else if(blue.speed>red.speed||blueWin&&!redWin){
            c.fillStyle = "blue";
            c.fillText("Blue Wins",canvas.width/2-100,canvas.height/2);
            freeze=true;
        }
        else if(red.speed>blue.speed||redWin&&!blueWin){
            c.fillStyle = "red";
            c.fillText("Red Wins",canvas.width/2-100,canvas.height/2);
            freeze=true;
        }
        c.fillStyle = "white";
    }
}