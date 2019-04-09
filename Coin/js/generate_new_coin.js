var min_coin = 0.000000001;
var my_boost = 0;
var current = 0;

function generate() {
	document.getElementById("look").innerHTML = current.toFixed(9);
	current += min_coin + my_boost;
	setTimeout(generate, 1000);
}

document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);

generate();


