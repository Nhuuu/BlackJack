document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
	var instance = M.Modal.getInstance(elems);

	getDeck();

	shuffle(deck);

	placeWager();

	// Deal button 
	document.getElementById("deal").addEventListener("click", function(){
		if(wager != "" && player.score === 0){
		document.querySelector(".msg").innerText = "Hit Or Stand";
		dealCardSound.play();
		dealDeck();
		checkBlackJack();
		};
		start = false;
	});

	// Hit button
	document.getElementById("hit").addEventListener("click", function(){
		if(player.hand != ""){
		hitPlayer();
		};
	});

	// Stand button
	document.getElementById("stand").addEventListener("click", function(){
		if(dealer.hand){
			stand();
		};
	});

	// Double down
	document.getElementById("double").addEventListener("click", function(){
		if (wagerTotal != 0){
		document.getElementById("betAmt").innerText = wagerTotal * 2;
		document.getElementById("balance").innerText = player.money - wagerTotal;
		pokerChip.play();
		};
	});

	// Restart the game - link?
	document.querySelector(".again").addEventListener("click", function(){
		if (player.money === 0) { 
		document.getElementById("balance").innerText = player.money;
		shuffle(deck);
		};
	});
});