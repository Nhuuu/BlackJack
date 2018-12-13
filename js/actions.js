function betLimit(){
	if(wagerTotal <= stackLimit){
		document.getElementById("betAmt").innerText = wagerTotal;
		document.getElementById("balance").innerText = balanceTotal;
	};
}

// For every chip clicked, it pushes the value to the wager array.
function placeWager(){
	var allChips = document.querySelectorAll(".chips");
	for(var i = 0; i < allChips.length; i++){
		allChips[i].addEventListener('click', function(e){
			e.preventDefault();
			wager.push(this.value);
			wagerTotal = wager.reduce(sum);
			balanceTotal = stackLimit - wager.reduce(sum);
			betLimit();
		});
	};
};



function hitMe(target){
	if(target.score > 21){
		document.querySelector(".msg").innerText = target.name + " BUST!";
	} else {
		const addCard = shuffledDeck.shift();
		target.hand.push(addCard);
		const card = document.createElement("img");
		card.src = "./cardImgs/" + addCard.values + addCard.suits + ".jpg";
		document.querySelector(target.selector).appendChild(card);
		countScore(target);
		bust(target);
	};
}

function stand(){
	bCard.src = "./cardImgs/" + dealer.hand[1].values + dealer.hand[1].suits + ".jpg";
	countScore(dealer);
	dealerLimits();
	checkWin();
}

function dealerLimits(){
		if(dealer.score < 17){
		while(dealer.score < 17){
			hitMe(dealer);
		};
	};
}

function bust(target){
	if(target.score > 21){
		document.querySelector(".msg").innerText = target.name + " BUST!";
	};
}

function checkWin(){
	bust(player);
	if(player.score > dealer.score && player.score < 21){
		document.querySelector(".msg").innerText = "PlAYER WINS!";
	} else if(dealer.score > player.score && dealer.score < 21){
		document.querySelector(".msg").innerText = "DEALER WINS!";
	}
}



function doubleDown(){

};

function split(){

}






