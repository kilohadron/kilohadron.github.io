var clickSound = new Audio('click.wav')
requestAnimationFrame(tick)
points = 0
function tick(){
	document.getElementById('display').innerHTML = points
}