"use strict";

const form = document.querySelector("#form");
const imgList = document.querySelector("#img-list")

form.addEventListener("submit", formGenerator)

function formGenerator(evt){
  evt.preventDefault();

  let first = true;
  const memeDetails = [];
  for(const input of form.children){
    if(input.type === "submit") break;

    if(first){
      const url = input.value;

      console.log(url);
      const img = document.createElement("img");
      img.src = url;
      imgList.append(img);
      first = false;

      continue;
    }

    memeDetails.push(input.value);
  }

  const meme = createMeme(memeDetails)

  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details){
  const li = document.createElement("li");

  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme");

  for(const value of details){
    const item = document.createElement("div");
    // TODO: add class

    item.innerText = value;
    memeContainer.append(item);
  }

  li.append(memeContainer);

  return li;
}