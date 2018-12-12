//Const
var suits = ["S", "D", "C", "H"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// example player object
const player = {
	hand: [],
	selector: '.pHand', // for querySelector
	score: 0,
	money: 200,
};

const dealer = {
	hand: [],
	selector: '.dHand', // for querySelector
};


//Global 
var card = {};
var deck = [];
var shuffledDeck;

