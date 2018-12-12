//Const
var suits = ["S", "D", "C", "H"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const dealer = {
	hand: [],
	selector: '.dHand', // for querySelector
	scoreClass: '.dScore',
	score: 0,
	name: "Dealer"
};
const player = {
	hand: [],
	selector: '.pHand', // for querySelector
	scoreClass: '.pScore',
	score: 0,
	money: 500,
	name: "Player"
};
const hitPlayer = () => hitMe(player);
const hitDealer = () => hitMe(dealer);


//Global 
var card = {};
var deck = [];
var shuffledDeck;
var bCard;

