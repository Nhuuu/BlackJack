document.getElementById("balance").innerText = player.money;


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
		document.getElementById("balance").innerText = player.money;
		setTimeout(clearHand, 3000);
	};
};



function checkBust(){
	if(player.score > 21){
		document.querySelector(".msg").innerText = player.name + " busts!";
		setTimeout(clearHand, 4000);
	} else if(dealer.score > 21){
		document.querySelector(".msg").innerText = dealer.name + " busts!";
		document.getElementById("balance").innerText = player.money + wagerTotal;
		setTimeout(clearHand, 4000);
	};
};



function checkWin(){
	if(player.score > dealer.score){
		document.querySelector(".msg").innerText = "Player wins!";
		document.getElementById("balance").innerText = player.money + wagerTotal;
		setTimeout(clearHand, 3000);
	} else if(player.score < dealer.score && dealer.score <= 21){
		document.querySelector(".msg").innerText = "Dealer wins!";
		setTimeout(clearHand, 3000);
	} else if(player.score === dealer.score){
		document.querySelector(".msg").innerText = "Draw!";
		document.getElementById("balance").innerText = player.money;
		setTimeout(clearHand, 3000);
	};
};
