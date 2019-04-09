var price_1 = 0.000000100;
var price_2 = 0.000001000;
var price_3 = 0.000005000;
var price_4 = 0.000010000;
var price_5 = 0.000050000;

var buy_1 = 0.000000001;
var buy_2 = 0.000000010;
var buy_3 = 0.000000050;
var buy_4 = 0.000000100;
var buy_5 = 0.000000500;

document.getElementById("price1").innerHTML = price_1.toFixed(9);
document.getElementById("price2").innerHTML = price_2.toFixed(9);
document.getElementById("price3").innerHTML = price_3.toFixed(9);
document.getElementById("price4").innerHTML = price_4.toFixed(9);
document.getElementById("price5").innerHTML = price_5.toFixed(9);

function buy(id){
	if(id == 1){
		if(current >= price_1){
			current -= price_1;
			my_boost += buy_1;
			price_1 *= 1.33;
			document.getElementById("price1").innerHTML = price_1.toFixed(9);
			document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);
		}else{
			alert("Недостаточно средств!");
		}
	}
	else if(id == 2){
		if(current >= price_2){
			current -= price_2;
			my_boost += buy_2;
			price_2 *= 1.33;
			document.getElementById("price2").innerHTML = price_2.toFixed(9);
			document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);
		}else{
			alert("Недостаточно средств!");
		}
	}
	else if(id == 3){
		if(current >= price_3){
			current -= price_3;
			my_boost += buy_3;
			price_3 *= 1.33;
			document.getElementById("price3").innerHTML = price_3.toFixed(9);
			document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);
		}else{
			alert("Недостаточно средств!");
		}
	}
	else if(id == 4){
		if(current >= price_4){
			current -= price_4;
			my_boost += buy_4;
			price_4 *= 1.33;
			document.getElementById("price4").innerHTML = price_4.toFixed(9);
			document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);
		}else{
			alert("Недостаточно средств!");
		}
	}
	else if(id == 5){
		if(current >= price_5){
			current -= price_5;
			my_boost += buy_5;
			price_5 *= 1.33;
			document.getElementById("price5").innerHTML = price_5.toFixed(9);
			document.getElementById("my_boost").innerHTML = "В секунду: +" + (min_coin + my_boost).toFixed(9);
		}else{
			alert("Недостаточно средств!");
		}
	}
}