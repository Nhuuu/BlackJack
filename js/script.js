document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var instance = M.Modal.getInstance(elems);

    function placeBet(){

    };

    getDeck();

    shuffle(deck);


    dealDeck();

    console.log(dealerHand);

    // This is where I will need to tie the dealt cards to create an element to hold the cards.

   
// + card.values + card.suits +



    resetDeck();







  });