https://nhuuu.github.io/BlackJack/

A JavaScript based Blackjack game. Beat the dealer by getting as close to 21 without going over. Get an A and a 10 point card and achieve BlackJack.

![](https://nhuuu.github.io/BlackJack/)
 
## Requirements:
* Game has directions on how to play 
* Game is playable against dealer 
* Game is winnable and winner is displayed 
* Draw detected
* Use of GitHub and deployed on Github Pages 
* Multiple JS files appropriately split up to reduce file length
* Appropriate naming of functions and elements


## Technologies Used 
* Materialize CSS Framework


## Process
1.	Laid out game board structure and created a grid structure to maintain responsiveness.
1.	Utilized Materialize framework for the navigation bar and modal.
1.	Researched game rules to include, and created key action buttons.
1.	Retrieved card and chip graphics.
1.	First JS focus was on getting the cards on the board.
* Created and assigned count values to each card
* Randomized the order of the deck using the Fisher-Yates shuffle technique
* Appended two cards from the top of the shuffled deck to the dealer (one faced down), and two cards to the player. The faced down card, still holds a card value, in case the dealer achieves a blackjack
1.	Created a hit function that can deal one card to either the dealer or player. if needed.
1.	Added logic to place the wager before being able to deal, hit and then stand.
1.	Added logic for aces, default aces value is 11, if there is an ace in the hand and the hand count is over 21, the ace switches the ace to value at 1.
1.	Adjusted logic so that if a blackjack or bust occurs, the hand is over without having to click stand and proper monetary amount is given for each situation.
1.	Implemented a reset game function to increment the current stack amount when it hits 0 in order to play again.
1.	Added soundbites for when a chip is clicked and when a card is dealt.


## Next Steps 
* Update chip balance for next hand
* Animate card flip and card deal


## Resources Used 
* CSS Framework: http://materializecss.com/ 
* Card Deck Graphics: http://acbl.mybigcommerce.com/52-playing-cards/ 
* Back Card: http://clipart-library.com/clipart/8cxrbGE6i.htm 
* Chip Graphics: https://www.gograph.com/clipart/poker-chips-denominations-gg77265703.html

