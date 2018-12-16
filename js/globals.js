// Const
document.getElementById("chip-5").value = 5;
document.getElementById("chip-10").value = 10;
document.getElementById("chip-25").value = 25;
document.getElementById("chip-100").value = 100;
const sum = (a, b) => a + b;
const suits = ["S", "D", "C", "H"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var dealer = {
	hand: [],
	selector: '.dHand', // for querySelector
	scoreClass: '.dScore',
	score: 0,
	name: "Dealer"
};
var player = {
	hand: [],
	selector: '.pHand', // for querySelector
	scoreClass: '.pScore',
	score: 0,
	money: 50,
	name: "Player"
};
const hitPlayer = () => hitMe(player);
const hitDealer = () => hitMe(dealer);


//Global 
var bCard;
var card = [];
var deck = [];
var shuffledDeck = [];
var wager = [];
var wagerTotal = 0;
var start = true;

// Load Audio 
var pokerChip = new Audio();
pokerChip.src = './audio/pokerchip.wav';
var dealCard = new Audio();
dealCard.src = "./audio/dealcard.wav";


