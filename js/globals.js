//Const
var chipTen = document.getElementById("chip-10").value = 10;
var chipTwentyFive = document.getElementById("chip-25").value = 25;
var chipFifty = document.getElementById("chip-50").value = 50;
var chipHundred = document.getElementById("chip-100").value = 100;


var suits = ["S", "D", "C", "H"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const dealer = {
	hand: [],
	selector: '.dHand', // for querySelector
	scoreClass: '.dScore',
	score: 0,
	name: "DEALER"
};
const player = {
	hand: [],
	selector: '.pHand', // for querySelector
	scoreClass: '.pScore',
	score: 0,
	money: 500,
	name: "PLAYER"
};
const hitPlayer = () => hitMe(player);
const hitDealer = () => hitMe(dealer);


//Global 
var card = {};
var deck = [];
var shuffledDeck;
var bCard;
var wager = [];
var wagerTotal;




