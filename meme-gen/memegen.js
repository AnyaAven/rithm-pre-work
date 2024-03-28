"use strict";

const form = document.querySelector("#form");
const imgList = document.querySelector("#img-list")

form.addEventListener("submit", formGenerator)

function formGenerator(evt){
  evt.preventDefault();


  const memeDetails = [];
  for(const input of form.children){
    if(input.type === "submit") break;

    memeDetails.push(input.value);
  }

  const meme = createMeme(memeDetails)

  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details){
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme");

  let first = true;
  for(const value of details){
    const item = document.createElement("div");

    if(first){
      const url = value;

      const img = document.createElement("img");
      img.src = url;

      memeContainer.append(img);
      first = false;
      continue;
    }

    item.innerText = value;
    memeContainer.append(item);
  }

  // remove button
  const removeButton = document.createElement("button");
  memeContainer.append(removeButton);
  removeButton.addEventListener("click", removeMeme);

  return memeContainer;
}

function removeMeme(evt){
  const target = evt.target;

  console.log(target.parentNode);
  target.parentNode.remove();
}