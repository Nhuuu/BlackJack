// Create deck and assign count values to each card
function getDeck(){
	let card = []
	for(let i = 0; i < suits.length; i++){
		for(let j = 0; j < values.length; j++){
			let count = parseInt(values[j])
			if(values[j] === "J" || values[j] === "Q" || values[j] === "K"){
				count = 10;
			} 
			if(values[j] === "A"){
				count = 11;
			} 
			card = {value: values[j], suit: suits[i], count: count};
			deck.push(card);
		};
	};
};

// Shuffle the deck, used the Fisher-Yates technique
function shuffle(deck){
	shuffledDeck = [];
	let n = 0; 
	while(n < deck.length){
		let randomIndex = Math.floor((Math.random() * deck.length));
		if(deck[randomIndex] != null){
			shuffledDeck.push(deck[randomIndex]);
			n++;
			deck[randomIndex] = null;
		} 
	} 
	return shuffledDeck;
};

// Populate the back of the card image and value on initial deal.
function backCard(){
	dealer.hand.push(shuffledDeck.shift());
	faceDown = document.createElement("img");
	faceDown.src = "./cardImgs/cardback.jpg";
	faceDown.classList.add("dealtCards");
	document.querySelector(dealer.selector).appendChild(faceDown);
};

// Initial deal
function dealDeck(){
	hitPlayer();
	hitDealer();
	hitPlayer();
	backCard();
	dealerScore();
	playerScore();
};

// Count each player's score, toggles the ace count.
function countScore(target){
	var aces = 0;
	target.score = 0;
	for (var i = 0; i < target.hand.length; i++){
		target.score = target.score + target.hand[i].count;
		if(target.hand[i].value == "A"){ 
			aces++;
		};
	};
	while (target.score > 21 && aces > 0){
		target.score -= 10;
		aces -= 1;
	};
};


function postScore(target){
	document.querySelector(target.scoreClass).innerText = "Score: " + target.score;
};


// Clears for next hand.
function clearHand(){
	var dealt = document.querySelectorAll(".dealtCards");
	for (var i = 0; i < dealt.length; i++){
		dealt[i].remove();
	};
	document.querySelector(player.scoreClass).innerText = "";
	document.querySelector(dealer.scoreClass).innerText = "";
	document.getElementById("betAmt").innerText = "";
	document.querySelector(".msg").innerText = "Place your Bet";
	wager = [];
	player.hand = [];
	dealer.hand  = [];
	player.score = 0;
	dealer.score = 0;
	start = true;
};

