function betLimit(){
	if(wagerTotal <= currentStack){
		document.getElementById("betAmt").innerText = wagerTotal;
		document.getElementById("balance").innerText = currentStack;
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
			currentStack = initialStack - wagerTotal;
			betLimit();
		});
	};
};


placeWager();


function hitMe(target){
	if(target.score < 21){
		const addCard = shuffledDeck.shift();
		target.hand.push(addCard);
		const card = document.createElement("img");
		card.src = "./cardImgs/" + addCard.values + addCard.suits + ".jpg";
		card.classList.add("dealtCards");
		document.querySelector(target.selector).appendChild(card);
		countScore(target);
		checkBust(player);
	};
}


function stand(){
	bCard.src = "./cardImgs/" + dealer.hand[1].values + dealer.hand[1].suits + ".jpg";
	countScore(dealer);
	dealerLimits();
	checkBust(dealer);
	checkWin();
}

function dealerLimits(){
		if(dealer.score < 17){
		while(dealer.score < 17){
			hitMe(dealer);
		};
	};
}

function checkBust(target){
	if(target.score > 21){
		document.querySelector(".msg").innerText = target.name + " BUST!";
		setTimeout(nextHand, 3000);
	}
}

function checkWin(){
	if(player.score > dealer.score){
		document.querySelector(".msg").innerText = "PLAYER WINS!";
		document.getElementById("balance").innerText = currentStack + wagerTotal;
		// setTimeout(nextHand, 3000);
	} else if(dealer.score > player.score){
		document.querySelector(".msg").innerText = "DEALER WINS!";
		document.getElementById("balance").innerText = currentStack;
		// setTimeout(nextHand, 3000);
	} else if(dealer.score === player.score){
		document.querySelector(".msg").innerText = "DRAW! PLAY AGAIN!";
		// setTimeout(nextHand, 3000);
	};
}







