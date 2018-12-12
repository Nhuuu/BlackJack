
// Create deck and assign count values to each card
function getDeck(){
	for(var i = 0; i < suits.length; i++){
		for(var j = 0; j < values.length; j++){
      	var count = parseInt(values[j])
      	if(values[j] === "J" || values[j] === "Q" || values[j] === "K") 
       	count = 10;
      	if(values[j] === "A")
        count = 11;
		card = {values: values[j], suits: suits[i], count: count};
      	deck.push(card);
		}
  	}
}

getDeck();

// Shuffle the deck, used the Fisher-Yates technique
function shuffle(deck){
  	shuffledDeck = []; //new array of cards
  	var n = 0; 
  	while(n < deck.length){
    	var randInd = Math.floor((Math.random() * deck.length));
    	if(deck[randInd] != null){
      	shuffledDeck.push(deck[randInd]);
      	n++; //n is running through the 52 cards
      	deck[randInd] = null; //setting the randind to null after taking it out of the deck
    	} 
  	} return shuffledDeck;
}

shuffle(deck);


function backCard(){
	// const addCard = ;
	dealer.hand.push(shuffledDeck.shift());
	const card = document.createElement("img");
	card.src = "./cardImgs/cardback.jpg";
	document.querySelector(dealer.selector).appendChild(card);
}

function dealDeck(){
	hitMe(player);
	hitMe(player);
	hitMe(dealer);
	backCard();
}

console.log(dealer.hand);
console.log(player.hand);

// put the cards that were dealt back into the deck to be shuffled for the next play
function resetDeck(){
  	for (var i = 0; i < 2; i++){
  	shuffledDeck.push(dealer.hand.pop());
  	shuffledDeck.push(player.hand.pop());
  	};
}

function countScore(target){

	for (var i = 0; i < target.hand.length; i++){
		var totalCount = target.hand[i++].count + target.hand[i++].count;
	}
	document.querySelector(target.scoreClass).innerText = "Count: " + totalCount;
}

// dealDeck();
// countScore(dealer);
// countScore(player);


