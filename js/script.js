document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var instance = M.Modal.getInstance(elems);

    function placeBet(){

    };

    getDeck();

    shuffle(deck);

    dealDeck();

    resetDeck();







  });