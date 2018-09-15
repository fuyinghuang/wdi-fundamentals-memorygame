console.log("Up and running!");

 
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardID){
	cardsInPlay.push(cards[cardID]);
  console.log("User flipped" + cards[cardId]);
if (cardsInPlay.length === 2) {
	if ( cardsInPlay[0] === cardsInPlay[2]){
		alert("You found a match!");
	}else{ 
		alert("Sorry, try again.");
	}
}
}
flipCard();
flipCard(0);
flipCard(2);
