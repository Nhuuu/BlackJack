

function placeBet(){

};

function hitMe(target){
	const addCard = shuffledDeck.shift();
	target.hand.push(addCard);
	const card = document.createElement("img");
	card.src = "./cardImgs/" + addCard.values + addCard.suits + ".jpg";
	document.querySelector(target.selector).appendChild(card);
}

function stand(){
	for( var i = 0; i < 17; dScore++){
	hitMe(dealer);
	};
}

function doubleDown(){

};

function split(){

}