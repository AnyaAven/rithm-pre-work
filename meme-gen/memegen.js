"use strict";

const form = document.querySelector("#form");
const imgList = document.querySelector("#img-list")

form.addEventListener("submit", addMeme)

function addMeme(evt){
  evt.preventDefault();

  const memeDetails = [];
  for(const input of form.children){
    if(input.type === "submit") break;

    // If the user has not added a url, don't do anything
    if(input.id === "img-url" && input.value === "") return;

    memeDetails.push(input.value);
  }

  const meme = createMeme(memeDetails)

  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details){
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  // Add img
  const url = details.shift();
  const img = document.createElement("img");
  img.classList.add("meme");
  img.src = url;
  memeContainer.append(img);

  // Add optional details
  for(const value of details){
    if(value === "") continue;
    const item = document.createElement("div");

    item.innerText = value;
    memeContainer.append(item);
  }

  // Add remove button
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  memeContainer.append(removeButton);
  removeButton.addEventListener("click", removeMeme);

  return memeContainer;
}

function removeMeme(evt){
  const target = evt.target;

  target.parentNode.remove();
}