document.getElementById("balance").innerText = player.money;


// For every chip clicked, it pushes the value to the wagerTotal.
function placeWager(){
	var allChips = document.querySelectorAll(".chips");
	for(var i = 0; i < allChips.length; i++){
		allChips[i].addEventListener('click', function(e){
			e.preventDefault();
			if(start){
				wager.push(this.value);
				wagerTotal = wager.reduce(sum);
				if(wagerTotal <= player.money){
					pokerChip.play();
					document.getElementById("betAmt").innerText = wagerTotal;
					document.getElementById("balance").innerText = player.money - wagerTotal;
				};
			};
		});
	};
};


function hitMe(target){
	if(target.score < 21){
		const addCard = shuffledDeck.shift();
		target.hand.push(addCard);
		const card = document.createElement("img");
		card.src = "./cardImgs/" + addCard.values + addCard.suits + ".jpg";
		dealCard.play();
		card.classList.add("dealtCards");
		document.querySelector(target.selector).appendChild(card);
		countScore(target);
		postScore(target);
		checkBust();
	};
};


function stand(){
	bCard.src = "./cardImgs/" + dealer.hand[1].values + dealer.hand[1].suits + ".jpg";
	dealCard.play();
	countScore(dealer);
	postScore(dealer);
	dealerLimits();
	checkWin(); 
};

function dealerLimits(){
		if(dealer.score < 17){
		while(dealer.score < 17){
			hitMe(dealer);
		};
	};
};


function checkBlackJack(){
	if (dealer.score === 21 && dealer.hand.length === 2){
		stand();
		document.querySelector(".msg").innerText = dealer.name + " has blackJack!";
		setTimeout(nextHand, 3000);
	} else if (player.score === 21 && player.hand.length === 2){
		document.querySelector(".msg").innerText = player.name + " has blackJack!"; 
		document.getElementById("balance").innerText = player.money + wagerTotal * 2;
		setTimeout(nextHand, 3000);
	};
};



function checkBust(){
	if(player.score > 21){
		document.querySelector(".msg").innerText = player.name + " busts!";
		setTimeout(nextHand, 3000);
	} else if(dealer.score > 21){
		document.querySelector(".msg").innerText = dealer.name + " busts!";
		document.getElementById("balance").innerText = player.money + wagerTotal;
		setTimeout(nextHand, 3000);
	};
};



function checkWin(){
	if(player.score > dealer.score){
		document.querySelector(".msg").innerText = "Player wins!";
		document.getElementById("balance").innerText = player.money + wagerTotal;
		setTimeout(nextHand, 3000);
	} else if(player.score < dealer.score && dealer.score <= 21){
		document.querySelector(".msg").innerText = "Dealer wins!";
		setTimeout(nextHand, 3000);
	} else if(player.score === dealer.score){
		document.querySelector(".msg").innerText = "Draw!";
		document.getElementById("balance").innerText = player.money;
		setTimeout(nextHand, 3000);
	};
};
