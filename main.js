onerror = (message, source, lineno, colno, error) => {
	alert(`Error: ${message} at ${source}:${lineno}:${colno}`);
};

let clickInterval = setInterval(mainClick,100)
var clickSound = new Audio('click.wav')
save = {points: 0,perClick:0,gen1:false}

function mainClick(){
	if(save.perClick != 0) {clickSound.play()}
	save.points += save.perClick
}

function tick(){
	document.getElementById('display').innerHTML = save.points
	if(save.points >= 10&& !save.gen1) {
		document.getElementById('gen1').style.display = "block";
		save.gen1 = true
	}
	requestAnimationFrame(tick)
}

document.addEventListener('DOMContentLoaded', function() {
	if(save.gen1) document.getElementById('gen1').style.display = "block";
	requestAnimationFrame(tick)
	var clicker = document.getElementById('clicker');
	clicker.addEventListener('mousedown', function() {
		document.getElementById('clicker').innerHTML = "<h1>hold</h1>"
		save.perClick = 1
	});
  
	clicker.addEventListener('mouseup', function() {
		save.perClick = 0
		document.getElementById('clicker').innerHTML = "<h1>click</h1>"
	});
  });
