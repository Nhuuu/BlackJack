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
			console.log(card)
		};
	};
};