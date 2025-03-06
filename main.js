save = {points: 0,perSec:0,perClick:0,gen1:0,gen1Display:false,gen1Multiplier:1,genUpgrades:0,genUpgradeDisplay:false}



onerror = (message, source, lineno, colno, error) => {
	alert(`Error: ${message} at ${source}:${lineno}:${colno}`);
};

var clickSound = new Audio('click.wav')



function mainClick(){
	if(save.perClick != 0) {clickSound.play()}
	save.points += save.perClick
}
var lastframetime = Date.now()
var deltatime = 0
var totalTime = 0

function tick() {
    deltatime = (Date.now() - lastframetime)
    lastframetime = Date.now()
	totalTime += deltatime
	if(totalTime >= 1000){
		genGain()
		mainClick()
		totalTime = 0
	}

	document.getElementById('display').innerHTML = save.points+'Ꝕ'
	if(save.points >= 10 && !save.gen1Display) {
		document.getElementById('gen1').style.display = "block";
		save.gen1Display = true
	}
	if(save.points >= 100 && !save.genUpgradeDisplay) {
		document.getElementById('genUpgrade').style.display = "block";
		save.genUpgradeDisplay = true
	}
	if(save.gen1 !== 0){
		document.getElementById('gen1').innerHTML = save.gen1+'∿<br>'+nextCost()+'Ꝕ'
	}

	requestAnimationFrame(tick)
}



document.addEventListener('DOMContentLoaded', function() {
	if(save.gen1Display) document.getElementById('gen1').style.display = "block";
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



gens = []
function buyGen1(){
	if(nextCost() <= save.points){
		if( save.gen1 === 0){
			document.getElementById('gen1').classList.remove('genOff')
			document.getElementById('gen1').classList.add('gen')
		}
		save.points -= nextCost()
		save.gen1+=1
	}
}



const nextCost = () => Math.floor(15*Math.pow(1.35,save.gen1))
genRate = 0.8
gen1multiplier = save.gen1Multiplier
function genGain(){
	if(save.gen1 !== 0) {
		//save.points += Math.floor(Math.pow(1.5*save.gen1,gen1multiplier))
		save.points += Math.floor(1.6*save.gen1*gen1multiplier)
	}
	
}
