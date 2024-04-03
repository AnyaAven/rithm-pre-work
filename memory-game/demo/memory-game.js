"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */
//TODO: add local storare
//TODO: add score variable
//TODO: add comments for all functions
//TODO: Add instructions?

// CUSTOMIZE
const backOfCardColor = "grey";
const FOUND_MATCH_WAIT_MSECS = 1000;
// const COLORS = [
//   "red", "blue", "pink", "orange", "purple", "#800000",
//   "red", "blue", "pink", "orange", "purple", "#800000",
// ];
const COLORS = ["green", "green", "blue", "blue"];

/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

//TODO: make this function work
function colorPicker(amountOfColors) {
  const multiplier = 1 / (amountOfColors + 1);


}

//TODO: use this function for colorPicker?
function randomNumFrom(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

let colors = shuffle(COLORS);
let secs = 1;
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startGame);

let previousTimer;

function startGame() {

  //start timer
  const time = document.querySelector("#timer");
  secs = 1;
  time.style.display = "block"
  previousTimer = timeCounter();

   // remove any existing games
   const oldGame = document.querySelector("#game");
   oldGame.remove();

  //clear win state
  const win = document.querySelector("#win-state");
  win.style.display = "none";

  //new game
  const game = document.createElement("div");
  game.id = "game";
  board.appendChild(game);


  colors = shuffle(COLORS)
  createCards(colors);
  startBtn.style.display = "none";
}


function timeCounter() {
  const html_timer = document.querySelector("#secs");

  return setInterval(addSec, 1000, html_timer)
}

function addSec(timer){
  timer.innerText = secs++;
}


/** Create card for every color in colors (each will appear twice)
 *
 * Each card is a div DOM element that will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const game = document.querySelector("#game");

  let numId = 1;
  for (const color of colors) {
    const card = document.createElement("div");
    card.classList.add(color);
    card.classList.add("card");
    card.id = "card" + numId++;

    // card.innerText = color;
    card.style.backgroundColor = backOfCardColor;

    card.addEventListener("click", handleCardClick);

    game.appendChild(card);
  }
}

/** Flip a card face-up. */
function flipCard(card) {
  //TODO: don't hard code the index
  const color = card.classList[0];

  if (card.classList.contains("flipped")) {
    return;
  }

  card.classList.add("flip");
  card.classList.add("flipped");

  setTimeout(function(){
    card.style.backgroundColor = color;
  }, 250, card)

  setTimeout(function(){
    card.classList.remove("flip");
  }, 500, card);
}

/** Flip a card face-down. */
function unFlipCard(card) {

  card.classList.remove("flipped");

  card.classList.add("unflip");

  setTimeout(function(){
    card.style.backgroundColor = backOfCardColor;

    // can change if you'd like to flip ASAP
    waiting = false;
  }, 250, card)

  setTimeout(function(){
    card.classList.remove("unflip");


  }, 500, card);

  firstCard = null;
}

let firstCard = null;
let waiting = false;

/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  const card = evt.target;

  if (waiting) return;
  if (card.classList.contains("matchedCard")) return;

  flipCard(card);

  //If there is no current card being displayed
  if (!firstCard) {
    firstCard = card;
    return;
  }

  //If you are clicked on the same card over and over, do nothing
  if (firstCard.id === card.id) return;

  //TODO: Try to fix this to not have a 0 index
  const color1 = firstCard.classList[0];
  const color2 = card.classList[0];

  //if there is a match!
  if (color1 === color2) {

    card.classList.add("matchedCard");
    firstCard.classList.add("matchedCard");
    firstCard = null;

    didUserWin();
    return;
  }

  //no match
  waiting = true;
  setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, firstCard);
  setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, card);

}

function didUserWin() {
  const numOfMatches = document.querySelectorAll("#game .matchedCard").length;
  const winningNum = colors.length;

  if (numOfMatches !== winningNum) return;

  const win = document.querySelector("#win-state");
  win.style.display = "flex";

  //clear existing timer interval
  clearInterval(previousTimer);
  //
  const timer = document.querySelector("#timer");
  timer.style.display = "none";
  timer.children["secs"].innerText = 0;

  startBtn.style.display = "flex"
  startBtn.innerText = "Wanna play again?"
}
