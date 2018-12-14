document.getElementById("balance").innerText = player.money;

// For every chip clicked, it pushes the value to the wager array.
function placeWager(){
	var allChips = document.querySelectorAll(".chips");
	for(var i = 0; i < allChips.length; i++){
		allChips[i].addEventListener('click', function(e){
			e.preventDefault();
			if(start){
				if(wagerTotal <= player.money){
					wager.push(this.value);
					wagerTotal = wager.reduce(sum);
					player.money = player.money - wagerTotal; 
					document.getElementById("balance").innerText = player.money;
					document.getElementById("betAmt").innerText = wagerTotal;
				};
			};
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
		blackJack(player);
	};
	console.log(target)
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
		document.querySelector(".msg").innerText = target.name + " bust!";
		setTimeout(nextHand, 4000);
	}
}



function checkWin(){

	if(player.score > dealer.score){
		setTimeout(nextHand, 4000);
		document.querySelector(".msg").innerText = "player wins!";
		player.money = player.money + (wagerTotal * 2);
		document.getElementById("balance").innerText = player.money;
	} else if(player.score < dealer.score && dealer.score < 21){
		setTimeout(nextHand, 4000);
		document.querySelector(".msg").innerText = "dealer wins!";
	} else if(player.score === dealer.score){
		setTimeout(nextHand, 4000);
		document.querySelector(".msg").innerText = "draw!";
		player.money = player.money + wagerTotal;
	};
	console.log(player.money); //fix this
}


function blackJack(target){
	var a = "A"
	if ((target.hand[0] === a || target.hand[1] === a) && target.score === 11 && target.hand.length === 2){
		document.querySelector(".msg").innerText = target.name + " has blackJack!";
		document.querySelector(target.scoreClass).innerText = "Count: " + 21;
	}
}
	//blackjack condition
	// player.money = player.money + wagerTotal * 3;


