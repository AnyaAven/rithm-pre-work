"use strict";

const imgList = document.querySelector("#img-list")

form.addEventListener("submit", addMeme)

function addMeme(evt){
  const form = evt.target;
  evt.preventDefault();
  // Remove previos error messages
  const prevErrors = document.querySelectorAll(".error");
  for(const error of prevErrors){
    error.remove();
  }

  const memeDetails = {};
  for(const input of form.children){
    if(input.type !== "text") continue;

    // If the user has not added a url, don't do anything
    if(input.id === "img_url" && input.value === "") {
      createErrorMessage("Error, no URL entered");
      return;
    }

    memeDetails[input.id] = input.value;
  }

  const meme = createMeme(memeDetails)
  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details){
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  // Add img
  const url = details.img_url;
  const img = document.createElement("img");
  img.classList.add("meme");
  img.src = url;
  memeContainer.append(img);

  //Check if URL is a valid image
  img.addEventListener("error", function() {
    createErrorMessage("URL is not a valid image");
    //TODO: find a better way stop executing the code IF the url is invalid.
    imgList.lastChild.remove();
  })

  // Add optional title
  const title = makeDetail(details, "img_title");
  if (title !== null) memeContainer.append(title);

  //Add optional description
  const description = makeDetail(details, "img_description")
  if (description !== null) memeContainer.append(description);

  // Add remove button
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerText = "Delete"
  memeContainer.append(removeButton);
  removeButton.addEventListener("click", removeMeme);

  //Toggle visibility of remove button with a mouse hover
  memeContainer.addEventListener("mouseenter", revealRemoveButton);
  memeContainer.addEventListener("mouseleave", hideRemoveButton);


  return memeContainer;
}

function makeDetail(details, id){
  const text = details[id];
  if(text === "") return null;

  const div = document.createElement("div");
  div.innerText = text;
  div.classList.add(id)

  return div;
}

function removeMeme(evt){
  const target = evt.target;

  target.parentNode.remove();
}

function revealRemoveButton(evt){
  const target = evt.target
  const remove = target.lastChild;

  remove.style.display = "block"
}

function hideRemoveButton(evt){
  const target = evt.target
  const remove = target.lastChild;

  remove.style.display = "none"
}

function createErrorMessage(message){
  const container = document.querySelector("#form-container");
  const error = document.createElement("div");
  error.classList.add("error");

  error.innerText = message
  ? message
  : "Error";

  container.append(error);
}