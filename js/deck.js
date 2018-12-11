
// Create deck and assign count values to each card
function getDeck(){
	for(var i = 0; i < suits.length; i++){
		for(var j = 0; j < values.length; j++){
      	var count = parseInt(values[j])
      	if(values[j] === "J" || values[j] === "Q" || values[j] === "K") 
       	count = 10;
      	if(values[j] === "A")
        count = 11;
		card = {value: values[j], suit: suits[i], count: count};
      	deck.push(card);
		}
  	}
}

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

// deal two cards to each 
function dealDeck(){
	dealerHand = [];
	playerHand = [];
  	for (var i = 0; i < 2; i++){
	dealerHand.push(shuffledDeck.shift());
  	playerHand.push(shuffledDeck.shift());
  	}
    dealerHand.forEach(function(newCard){
	newCard = document.createElement('img');
	newCard.src = "./cardImgs/" + card.value + card.suit + ".jpg";
	console.log(newCard);
	document.querySelector(".dHand").appendChild(newCard);
	});


}


// put the cards that were dealt back into the deck to be shuffled for the next play
function resetDeck(){
  	for (var i = 0; i < 2; i++){
  	shuffledDeck.push(dealerHand.pop());
  	shuffledDeck.push(playerHand.pop());
  	}
}









