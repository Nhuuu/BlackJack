
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

// add a card
function cardToDealer(){
		dealerHand.push(shuffledDeck.shift());
		dealerHand.forEach(function(card){
			dCard = document.createElement("img");
			dCard.src = "./cardImgs/" + card.values + card.suits + ".jpg"
			document.querySelector(".dHand").appendChild(dCard)
		});
	}

function cardToPlayer(){
		playerHand.push(shuffledDeck.shift());
		playerHand.forEach(function(card){
			pCard = document.createElement("img");
			pCard.src = "./cardImgs/" + card.values + card.suits + ".jpg";
			document.querySelector(".pHand").appendChild(pCard);
		});
	}


function dealDeck(){
	// for (var i = 0; i < 2; i++){
	 	cardToPlayer();
	// };
	cardToDealer();
	dBack = document.createElement("img");
	dBack.src = "./cardImgs/cardback.jpg";
	document.querySelector(".dHand").appendChild(dBack);
	dBack = null; //idk if this works yet, go to line 79	
}



// flip the dealer's card after player is done with actions. //remove back img and replace with random card.
// function flipCard(){
// 	document.getElementById("dHand").parentNode.removeChild("dBack");
// 	dealerHand.push(shuffledDeck.shift());
// 	dCard2 = document.createElement("img");
// 	dCard2.src = "./cardImgs/" + dealerHand[0].values + dealerHand[0].suits + ".jpg";
// }

// flipCard();

// put the cards that were dealt back into the deck to be shuffled for the next play
function resetDeck(){
  	for (var i = 0; i < 2; i++){
  	shuffledDeck.push(dealerHand.pop());
  	shuffledDeck.push(playerHand.pop());
  	};
}

resetDeck();

// function countScore(){
// 	for(var i = 0; i < playerHand.length; i++){
// 		pScore = sum + player.count[i];
// 	}

// } 



// 	document.getElementById("playerScore").innerText = "Count: " + (playerHand[0].count += playerHand[1].count);
// 	if(dealerHand.count != null){ //idk if this works yet, go to line 44
// 		dScore = document.getElementById("dealerScore").innerText = "Count: " + (dealerHand[0].count += dealerHand[1].count);
// 	} else {
// 		dScore = document.getElementById("dealerScore").innerText = "Count: " + dealerHand[0].count;
// 	}
// }

// countScore();





// function check(){

// }


