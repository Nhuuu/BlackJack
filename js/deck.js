// Create deck and assign count values to each card
function getDeck(){
	for(var i = 0; i < suits.length; i++){
		for(var j = 0; j < values.length; j++){
      	var count = parseInt(values[j])
      	if(values[j] === "J" || values[j] === "Q" || values[j] === "K"){
          count = 10;
        } 
      	if(values[j] === "A"){
          count = 11;
        } 
		    card = {values: values[j], suits: suits[i], count: count};
      	deck.push(card);
		};
  };
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


// Populate the back of the card image on initial deal.
function backCard(){
	dealer.hand.push(shuffledDeck.shift());
	bCard = document.createElement("img");
	bCard.src = "./cardImgs/cardback.jpg";
  bCard.classList.add("dealtCards");
	document.querySelector(dealer.selector).appendChild(bCard);
}

// Deal two cards to each player.
function dealDeck(){
	hitMe(player);
	hitMe(player);
	hitMe(dealer);
	backCard();
}

// Count each player's score.
function countScore(target){
  var aces = 0;
	target.score = 0;
	for (var i = 0; i < target.hand.length; i++){
    for (var j = 0; j < target.hand[i].values.length; j++){
      target.score = target.score + target.hand[i].count;
      if(target.hand[i].values[j] == "A"){
        aces++;
        } 
      }
	}
  while (target.score > 21 && aces > 0){
    target.score -= 10;
    aces -= 1;
  }
	document.querySelector(target.scoreClass).innerText = "Count: " + target.score;
}


// Need to keep current stack, need to run this after win/lose
function nextHand(){
  var dealt = document.querySelectorAll(".dealtCards");
  for (var i = 0; i < dealt.length; i++){
    dealt[i].remove();
    shuffledDeck.push(dealer.hand.pop());
    shuffledDeck.push(player.hand.pop());
  }
    document.querySelector(player.scoreClass).innerText = "";
    document.querySelector(dealer.scoreClass).innerText = "";
    document.getElementById("betAmt").innerText = "";
    document.querySelector(".msg").innerText = "Place your Bet";
    wager = [];
    player.score = 0;
    dealer.score = 0;
    start = true;
}


// Clear the board, not yet working.
function resetGame(){
  shuffle(deck);
  dealDeck();
  // player.money;
}


