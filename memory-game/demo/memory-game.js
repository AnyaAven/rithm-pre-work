"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */
//TODO: add local storare
//TODO: add score variable
//TODO: add comments for all functions
//TODO: Add instructions?

// CUSTOMIZE
const backOfCardColor = "grey";
const FOUND_CARDS_WAIT_MSECS = 1000;

//Amount of time to flip the cards
const FLIP_TIME_MSECS = 500;

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

let previousTimer;
let colors = shuffle(COLORS);
let secs = 1;

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);

function startGame() {

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

  //start timer
  const time = document.querySelector("#timer");
  secs = 1;
  time.style.display = "block";
  previousTimer = timeCounter();

  //Create cards and add to the game
  colors = shuffle(COLORS);
  createCards(colors);

  //Hide start button
  startBtn.style.display = "none";
}

function timeCounter() {
  const html_timer = document.querySelector("#secs");

  return setInterval(addSec, 1000, html_timer);
}

function addSec(timer) {
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

  //id for each card
  let numId = 1;

  for (const color of colors) {
    const card = document.createElement("div");
    card.classList.add(color);
    card.classList.add("card");
    card.id = "card" + numId++;

    card.style.backgroundColor = backOfCardColor;

    card.addEventListener("click", handleCardClick);

    game.appendChild(card);
  }
}

/** Flip a card face-up. */
function flipCard(card) {
  const color = card.classList[0];

  //Don't flip card if already flipped
  if (card.classList.contains("flipped")) {
    return;
  }

  //adds flip animation
  card.classList.add("flip");
  //Specifies that the card has been flipped
  card.classList.add("flipped");

  //Change card color half way through flip animation
  setTimeout(function () {
    card.style.backgroundColor = color;
  }, FLIP_TIME_MSECS / 2, card);

  //Remove flip animation
  setTimeout(function () {
    card.classList.remove("flip");
  }, FLIP_TIME_MSECS, card);
}

/** Flip a card face-down. */
function unFlipCard(card) {

  card.classList.remove("flipped");

  //Adds unflip animation
  card.classList.add("unflip");

  //Change card color half way through flip animation
  setTimeout(function () {
    card.style.backgroundColor = backOfCardColor;

    //Change waiting to false to allow user to continue clicking for a match
    waiting = false;
  }, FLIP_TIME_MSECS / 2, card);

  //Remove unflip animation
  setTimeout(function () {
    card.classList.remove("unflip");
  }, FLIP_TIME_MSECS, card);

  //Reset first card
  firstCard = null;
}

let firstCard = null;
let waiting = false;

/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  const card = evt.target;

  //Don't do anything if we are waiting to unflip our un matched cards
  if (waiting) return;
  //Dont do anything if we click on a matched card
  if (card.classList.contains("matchedCard")) return;

  //Flip our first card
  flipCard(card);

  //If there is no current card being displayed
  if (!firstCard) {
    firstCard = card;
    return;
  }

  //If user clickes on the same card over and over, do nothing
  if (firstCard.id === card.id) return;

  const color1 = firstCard.classList[0];
  const color2 = card.classList[0];

  //if there is a match!
  if (color1 === color2) {

    //Add matchedCard classes
    card.classList.add("matchedCard");
    firstCard.classList.add("matchedCard");

    //Reset first card
    firstCard = null;

    //Check if User has won the game
    if(didUserWin()) {
      //User wins!
      setTimeout(handleWin, FOUND_CARDS_WAIT_MSECS)
    }
    return;
  }

  //no match, allow user to see incorrectly matched cards for a specified time
  waiting = true;
  setTimeout(unFlipCard, FOUND_CARDS_WAIT_MSECS, firstCard);
  setTimeout(unFlipCard, FOUND_CARDS_WAIT_MSECS, card);
}

/* Returns true or false if user has won*/
function didUserWin() {
  const numOfMatches = document.querySelectorAll("#game .matchedCard").length;
  const winningNum = colors.length;

  //Checks if user has the correct amount of matched cards
  return numOfMatches === winningNum;
}

/* Handles win state */
function handleWin() {
  const win = document.querySelector("#win-state");
  win.style.display = "flex";

  //clear existing timer interval
  clearInterval(previousTimer);
  //Remove timer from view
  const timer = document.querySelector("#timer");
  timer.style.display = "none";
  //Reset the html timer
  timer.children["secs"].innerText = 0;

  //Restart button
  startBtn.style.display = "flex";
  startBtn.innerText = "Wanna play again?";
}
