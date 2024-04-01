"use strict";

const imgList = document.querySelector("#img-list");

form.addEventListener("submit", addMeme);

function addMeme(evt) {
  evt.preventDefault();
  const form = evt.target;

  // Remove previos error messages
  const prevErrors = document.querySelectorAll(".error");
  for (const error of prevErrors) {
    error.remove();
  }

  const memeDetails = {};
  for (const [id, text] of new FormData(form)) {

    // If the user has not added a url, don't do anything
    if (id === "img_url" && text === "") {
      createErrorMessage("Error, no URL entered");
      return;
    }

    memeDetails[id] = text;
  }

  const meme = createMeme(memeDetails);
  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details) {
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  // Add img
  const img = makeImg(details, "img_url")
  memeContainer.append(img);

  // Add optional title
  const title = makeDetail(details, "img_title");
  if (title !== null) memeContainer.append(title);

  //Add optional description
  const description = makeDetail(details, "img_description");
  if (description !== null) memeContainer.append(description);

  // Add remove button
  const removeButton = makeRemoveButton();
  memeContainer.append(removeButton);

  //Toggle visibility of remove button with a mouse hover
  memeContainer.addEventListener("mouseenter", revealRemoveButton);
  memeContainer.addEventListener("mouseleave", hideRemoveButton);


  return memeContainer;
}

function makeDetail(details, id) {
  const text = details[id];
  if (text === "") return null;

  const div = document.createElement("div");
  div.innerText = text;
  div.classList.add(id);

  return div;
}

function makeImg(details, id){
  const url = details[id];
  const img = document.createElement("img");
  img.classList.add("meme");
  img.src = url;

  //Check if URL is a valid image
  img.addEventListener("error", function () {
    createErrorMessage("URL is not a valid image");
    //TODO: find a better way stop executing the code IF the url is invalid.
    imgList.lastChild.remove();
  });

  return img;
}

function makeRemoveButton(){
  const btn = document.createElement("button");
  btn.classList.add("remove");
  btn.innerText = "Delete";

  btn.addEventListener("click", removeMeme);

  return btn;
}

function removeMeme(evt) {
  const target = evt.target;

  target.parentNode.remove();
}

function revealRemoveButton(evt) {
  const target = evt.target;
  const remove = target.lastChild;

  remove.style.display = "block";
}

function hideRemoveButton(evt) {
  const target = evt.target;
  const remove = target.lastChild;

  remove.style.display = "none";
}

function createErrorMessage(message) {
  const container = document.querySelector("#form-container");
  const error = document.createElement("div");
  error.classList.add("error");

  error.innerText = message
    ? message
    : "Error";

  container.append(error);
}