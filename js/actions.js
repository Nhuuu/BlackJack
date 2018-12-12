
function placeBet(){

};

function hitMe(target){
	const addCard = shuffledDeck.shift();
	target.hand.push(addCard);
	const card = document.createElement("img");
	card.src = "./cardImgs/" + addCard.values + addCard.suits + ".jpg";
	document.querySelector(target.selector).appendChild(card);
	countScore(target);
	bust(target);
}


function stand(){
	bCard.src = "./cardImgs/" + dealer.hand[1].values + dealer.hand[1].suits + ".jpg";
	underSeventeen();
	checkWin();
}


function underSeventeen(){
	while(dealer.score < 17){
		hitMe(dealer);
	};
}

//This isn't working
// function blackJack(){
// 	if(player.hand.values.hasOwnProperty("A") && player.score === 21){
// 		document.querySelector(".msg").innerText = "Congratulations, you have BlackJack!";
// 	};
// 	if(dealer.hand.values.hasOwnProperty("A") && player.score === 21){
// 		document.querySelector(".msg").innerText = "You lost, Dealer has BlackJack!";
// 	};
// }


function bust(target){
	if(target.score > 21){
		document.querySelector(".msg").innerText = target.name + " bust!";
	};
}

function checkWin(){
	if(player.score > dealer.score && player.score < 21){
		document.querySelector(".msg").innerText = "Player Wins!";
	} else if(dealer.score > player.score && dealer.score < 21){
		document.querySelector(".msg").innerText = "Dealer wins!";
	}
}






function doubleDown(){

};

function split(){

}

//clears board
function playGame(){


}




