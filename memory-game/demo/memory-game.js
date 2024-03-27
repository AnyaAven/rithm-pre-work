"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

// CUSTOMIZE
const backOfCardColor = "grey";
const FOUND_MATCH_WAIT_MSECS = 2000;
const COLORS = [
  "red", "blue", "green", "orange", "purple", "pink",
  "red", "blue", "green", "orange", "purple", "pink",
];
// const COLORS = ["green", "green", "blue", "blue"];


let colors = shuffle(COLORS);

const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startGame);

// TODO: make previos game board disappear and have a new one to restart
function startGame() {

  //clear win state
  const win = document.querySelector("#win-state");
  win.style.display = "none";


  // remove any existing games
  const oldGame = document.querySelector("#game");
  oldGame.remove();

  //new game
  const game = document.createElement("div");
  game.id = "game";
  board.appendChild(game);

  colors = shuffle(COLORS)
  createCards(colors);
  startBtn.style.display = "none";
}

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
  }, 500, card)

  setTimeout(function(){
    card.classList.remove("flip");
  }, 1000, card);
}

/** Flip a card face-down. */
function unFlipCard(card) {

  card.classList.remove("flipped");

  card.classList.add("unflip");

  setTimeout(function(){
    card.style.backgroundColor = backOfCardColor;
  }, 500, card)

  setTimeout(function(){
    card.classList.remove("unflip");

    waiting = false;
  }, 1000, card);

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

  // TODO: change display if needed for better css design
  win.style.display = "flex";

  startBtn.style.display = "flex"
  startBtn.innerText = "Wanna play again?"
}
