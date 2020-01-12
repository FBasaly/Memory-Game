/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976




function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const cardSymbols=["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb"];
const allCardSymbols=[...cardSymbols,...cardSymbols];
const deck = document.getElementsByClassName("deck")[0];
function startGame(){
   var shuffledCards = shuffle(allCardSymbols);
   for (var i= 0; i < shuffledCards.length; i++){
      var icon= document.createElement("i");
      var card =document.createElement("li");
      card.appendChild(icon);
      card.className="card";
      icon.className =shuffledCards[i];
      deck.appendChild(card);   
}

}

startGame();
var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
let moves = document.getElementsByClassName("moves")[0];
let movesLabel = document.getElementsByClassName("moves-label")[0];
let movesCount = 0;
let stars = document.querySelector('.stars');
let starsList = document.querySelectorAll('.stars li');
var openedCards=[];
let cards = document.getElementsByClassName("card");
//         let cardsArray = [...cards];
//         let shufflearray = shuffle (cardsArray)
        for (let card of cards){
           card.addEventListener("click", function(){
            card.classList.add("open", "show");
            openedCards.push(card);
            
            cardOpen();
            
           });
        };



function cardOpen() {
    
    let len = openedCards.length;
    console.log (len);
    if(len === 2){
        
        if(openedCards[0].innerHTML === openedCards[1].innerHTML){
            matched();
        } else {
            unmatched();
        }
        moveCounter();
    }
    
    
};


function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];

};


function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    // disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards = [];
        // enable();
    
    },200);
    
}

// Increment moves
function moveCounter() {

    // Increase move count by one
    movesCount++;
  
    // Update page display of move count
    moves.textContent = movesCount;
    if (movesCount > 2 && movesCount < 4) {
       
          
            stars.removeChild(stars.lastElementChild);
          
        
      }
      else if (movesCount > 5 && movesCount < 7) {
        
          
            stars.removeChild(stars.lastElementChild);
          
        
      }
  };

  
  

// function disable(){
//     Array.prototype.filter.call(cards, function(card){
//         card.classList.add('disabled');
//     });
// }

// function enable(){
//     Array.prototype.filter.call(cards, function(card){
//         card.classList.remove('disabled');
//         for(var i = 0; i < matchedCard.length; i++){
//             matchedCard[i].classList.add("disabled");
//         }
//     });
// }



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
