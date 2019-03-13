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
		document.querySelector(".msg").innerText = "Hit or Stand";
		dealCardSound.play();
		dealDeck();
		checkBlackJack();
		};
		start = false;  // to stop waging
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
		if (wagerTotal != 0 && player.hand.length === 2){
			player.money = player.money - wagerTotal;
			wagerTotal = wagerTotal * 2;
			document.getElementById("betAmt").innerText = wagerTotal;
			document.getElementById("balance").innerText = player.money;
			pokerChip.play();
			hitPlayer();
			stand();
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