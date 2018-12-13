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
function addToBet(){
	document.getElementById("chip-10").addEventListener("click", function(){
		wager.push(chipTen);
	});
	document.getElementById("chip-25").addEventListener("click", function(){
		wager.push(chipTwentyFive);
	});
	document.getElementById("chip-50").addEventListener("click", function(){
		wager.push(chipFifty);
	});
	document.getElementById("chip-100").addEventListener("click", function(){
		wager.push(chipHundred);
	});		
}

console.log(wager);

// Need to add elements of the wager array.
var wagerTotal;
function placeBet(){
	addToBet();
	document.getElementById("betAmt").innerText = wagerTotal;
	for (var i = 0; i <= wager.length; i++){
		wagerTotal = wagerTotal + wager[i];	
	};
}

placeBet();


// document.getElementById("double").addEventListener("click", dealDeck);
// document.getElementById("split").addEventListener("click", dealDeck);


  });