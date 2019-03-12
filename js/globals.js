// Constants
document.getElementById("chip-5").value = 5;
document.getElementById("chip-10").value = 10;
document.getElementById("chip-25").value = 25;
document.getElementById("chip-100").value = 100;
const sum = (a, b) => a + b;
const suits = ["S", "D", "C", "H"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const hitPlayer = () => hitMe(player);
const hitDealer = () => hitMe(dealer);
const playerScore = () => countScore(player);
const dealerScore = () => countScore(dealer);

//Global 
var faceDown;
var deck = [];
var shuffledDeck = [];
var wager = [];
var wagerTotal = 0;
var start = true;
var dealer = {
	hand: [],
	selector: '.dealerHand',
	scoreClass: '.dealerScore',
	score: 0,
	name: "Dealer"
};
var player = {
	hand: [],
	selector: '.playerHand',
	scoreClass: '.playerScore',
	score: 0,
	money: 500,
	name: "Player"
};


// Load Audio 
var pokerChip = new Audio();
pokerChip.src = './audio/pokerchip.wav';
var dealCardSound = new Audio();
dealCardSound.src = "./audio/dealcard.wav";


