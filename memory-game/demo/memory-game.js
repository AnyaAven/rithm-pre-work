"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple", "pink",
  "red", "blue", "green", "orange", "purple", "pink",
];
const backOfCardColor = "grey";

const colors = shuffle(COLORS);

const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", startGame);

function startGame() {
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
  const gameBoard = document.querySelector("#game");

  let numId = 1;
  for (const color of colors) {
    const card = document.createElement("div");
    card.classList.add(color);
    card.classList.add("card");
    card.id = "card" + numId++;

    card.innerText = color;
    card.style.backgroundColor = backOfCardColor;

    card.addEventListener("click", handleCardClick);

    gameBoard.appendChild(card);
  }
}

/** Flip a card face-up. */
function flipCard(card) {
  //TODO: don't hard code the index
  const color = card.classList[0];

  card.style.backgroundColor = color;

}

/** Flip a card face-down. */

function unFlipCard(card) {
  card.style.background = backOfCardColor;

  waiting = false;
  numOfFlips = 0;
  firstCard = null;
}


let numOfFlips = 0;
let firstCard = null;
let waiting = false;

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  const card = evt.target;

  if (waiting) return;
  if (card.classList.contains("correctCard")) return;

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

    card.classList.add("correctCard");
    firstCard.classList.add("correctCard");
    firstCard = null;

    return;
  }

  //no match
  waiting = true;
  setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, firstCard);
  setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, card);


  console.log("current:", card, "firstCard", firstCard);
}
