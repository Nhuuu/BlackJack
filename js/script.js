document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    var instance = M.Modal.getInstance(elems);

	document.getElementById("deal").addEventListener("click", function(){
		dealDeck();
		countScore(player);
	});

	document.getElementById("hit").addEventListener("click", function(){
		if(player.hand != ""){
		hitPlayer();
		};
	});

	document.getElementById("stand").addEventListener("click", stand);



// Stores every click into the wager array.
function placeWager(){
	document.getElementById("chip-10").addEventListener("click", function(){
		wager.push(chipTen);
		updateWager();
	});
	document.getElementById("chip-25").addEventListener("click", function(){
		wager.push(chipTwentyFive);
		updateWager();
	});
	document.getElementById("chip-50").addEventListener("click", function(){
		wager.push(chipFifty);
		updateWager();
	});
	document.getElementById("chip-100").addEventListener("click", function(e){
		e.preventDefault();
		wager.push(chipHundred);
		updateWager();
	});		
}

placeWager();

const sum = (a, b) => a + b;

function updateWager() {
	document.getElementById('betAmt'). innerText = wager.reduce(sum);
}




// document.getElementById("double").addEventListener("click", dealDeck);
// document.getElementById("split").addEventListener("click", dealDeck);


  });