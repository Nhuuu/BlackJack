document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
	var instance = M.Modal.getInstance(elems);

	getDeck();

	shuffle(deck);


	// Deal button 
	document.getElementById("deal").addEventListener("click", function(){
		if(wager != "" && player.score === 0){
		dealDeck();
		countScore(player);
		};
	});

	// Hit button
	document.getElementById("hit").addEventListener("click", function(){
		if(player.hand != ""){
		hitPlayer();
		};
	});

	// Stand button
	document.getElementById("stand").addEventListener("click", stand);

	// Double down
	document.getElementById("double").addEventListener("click", function(){
		document.getElementById("betAmt").innerText = wagerTotal * 2;
		document.getElementById("balance").innerText = currentStack - wagerTotal;
	});

	// Need to restart the game
	// document.querySelector(".again").addEventListener("click", resetGame);
	
 });