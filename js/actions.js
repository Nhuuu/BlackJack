// For every chip clicked
function placeWager(){
	var allChips = document.querySelectorAll(".chips");
	for(var i = 0; i < allChips.length; i++){
		allChips[i].addEventListener('click', function(e){
			e.preventDefault();
			if(start){
				wager.push(this.value);
				wagerTotal = wager.reduce(sum);
				if(this.value <= player.money){
					pokerChip.play();
					player.money = player.money - this.value;
					document.getElementById("betAmt").innerText = wagerTotal;
					document.getElementById("balance").innerText = player.money;
				};               
			};
		});
	};
};


function hitMe(target){
	if(target.score < 21){
		dealCard = shuffledDeck.shift();
		target.hand.push(dealCard);
		dealtCard = document.createElement("img");
		dealtCard.src = "./cardImgs/" + dealCard.value + dealCard.suit + ".jpg";
		dealCardSound.play();
		dealtCard.classList.add("dealtCards");
		document.querySelector(target.selector).appendChild(dealtCard);
		countScore(target);
		postScore(target);
		checkBust();
	};
};


function stand(){
	faceDown.src = "./cardImgs/" + dealer.hand[1].value + dealer.hand[1].suit + ".jpg";
	dealCardSound.play();
	countScore(dealer);
	postScore(dealer);
	dealerLimits();
	checkWin(); 
};


function dealerLimits(){
	if(dealer.score < 17){
		while(dealer.score < 17){
			hitDealer();
		};
	};
};


function checkBlackJack(){
	if (dealer.score === 21 && dealer.hand.length === 2){
		stand();
		document.querySelector(".msg").innerText = dealer.name + " has blackJack!";
		setTimeout(clearHand, 3000);
	} else if (player.score === 21 && player.hand.length === 2){
		document.querySelector(".msg").innerText = player.name + " has blackJack!";
		player.money = player.money + wagerTotal * 2.5;
		setTimeout(clearHand, 3000);
		document.getElementById("balance").innerText = player.money;
	};
	return player.money;
};



function checkBust(){
	if(player.score > 21){
		document.querySelector(".msg").innerText = player.name + " busts!";
		setTimeout(clearHand, 4000);
	} else if(dealer.score > 21){
		document.querySelector(".msg").innerText = dealer.name + " busts!";
		player.money = player.money + wagerTotal * 2;
		setTimeout(clearHand, 4000);
		document.getElementById("balance").innerText = player.money;
	};
	return player.money;
};

function checkWin(){
	if(player.score > dealer.score){
		document.querySelector(".msg").innerText = "Player wins!";
		player.money = player.money + wagerTotal * 2;
		setTimeout(clearHand, 3000);
		document.getElementById("balance").innerText = player.money;
	} else if(player.score < dealer.score && dealer.score <= 21){
		document.querySelector(".msg").innerText = "Dealer wins!";
		setTimeout(clearHand, 3000);
	} else if(player.score === dealer.score){
		document.querySelector(".msg").innerText = "Draw!";
		player.money = player.money + wagerTotal;
		setTimeout(clearHand, 3000);
		document.getElementById("balance").innerText = player.money;
	};
	return player.money;
};
