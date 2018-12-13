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


// document.getElementById("double").addEventListener("click", dealDeck);
// document.getElementById("split").addEventListener("click", dealDeck);


  });