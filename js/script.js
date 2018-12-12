document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var instance = M.Modal.getInstance(elems);

// Need to set this to where it can't be pressed until after Place Bet.
	document.getElementById("deal").addEventListener("click", function(){
		// if(player.hand === []){
		dealDeck();
		countScore(player);
		// blackJack();
		// }
	});

// Need to set this to where you can't keep hitting after you bust or get 21.
	document.getElementById("hit").addEventListener("click", function(){
		hitPlayer()
	});

	document.getElementById("stand").addEventListener("click", stand);
// document.getElementById("double").addEventListener("click", dealDeck);
// document.getElementById("split").addEventListener("click", dealDeck);


  });