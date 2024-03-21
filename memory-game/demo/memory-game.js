"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple", "pink",
  "red", "blue", "green", "orange", "purple", "pink",
];

const colors = shuffle(COLORS);

createCards(colors);


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

  for (const color of colors) {
    const card = document.createElement("div");
    card.classList.add(color);

    card.innerText = color;

    card.addEventListener("click", handleCardClick);

    gameBoard.appendChild(card);
  }
}

/** Flip a card face-up. */

let numOfFlips = 0;
let firstCard = null;
let waiting = false;

function flipCard(card) {
  const color = card.classList;

  card.style.backgroundColor = color;

  numOfFlips++;
}


/** Flip a card face-down. */

function unFlipCard(card) {
//TODO: the color should be inherited by the current color in CSS
  const color = "grey";

  card.style.background = color;

  waiting = false;
  numOfFlips = 0;
  firstCard = null;
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  const card = evt.target;

  if (waiting) return;
  if(card.classList.contains("correctCard")) return;

  flipCard(card);

  //If there is no current card
  if (!firstCard) {
    firstCard = card;

    console.log("currCard", firstCard);
    return;
  }

  //if there is a current card
  if (firstCard && numOfFlips === 2) {

    //TODO: Try to fix this to not have a 0 index
    const color1 = firstCard.classList[0];
    const color2 = card.classList[0];

    //if there is a match!
    if (color1 === color2) {

      card.classList.add("correctCard");
      firstCard.classList.add("correctCard");

      numOfFlips = 0;
      firstCard = null;

      return;
    }

    //no match
    waiting = true;
    setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, firstCard);
    setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, card);

  }

  console.log(firstCard);
}
