document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var instance = M.Modal.getInstance(elems);

    // function placeBet(){

	document.getElementById("deal").addEventListener("click", function(){
		dealDeck();
		countScore(dealer);
		countScore(player);
	});
	document.getElementById("hit").addEventListener("click", hitPlayer);
// document.getElementById("stand").addEventListener("click", dealDeck);
// document.getElementById("double").addEventListener("click", dealDeck);
// document.getElementById("split").addEventListener("click", dealDeck);


    // };

    // getDeck();

    // shuffle(deck);

    // dealDeck();

    // resetDeck();


// function playAgain(){

// }





  });