"use strict";

const imgList = document.querySelector("#img-list");

form.addEventListener("submit", addMeme);

// Add content from local storage
for (const memeDetails of JSON.parse(localStorage.getItem("memes")?? "[]")) {
  const meme = createMeme(memeDetails);
  imgList.appendChild(meme);
}

/* Add meme to image-list on HTML */
function addMeme(evt) {
  evt.preventDefault();
  const form = evt.target;

  // Remove previous error messages
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

    //Adds details from Title and Description
    memeDetails[id] = text;
  }

  //Keeps track of what place the meme exists
  memeDetails.id = Date.now();
  console.log("ID", memeDetails.id);

  //get localStorage
  const memes = JSON.parse(localStorage.getItem("memes")?? "[]");
  memes.push(memeDetails);

  //Add to localStorage
  localStorage.setItem("memes", JSON.stringify(memes));

  const meme = createMeme(memeDetails);
  imgList.appendChild(meme);

  form.reset();
}

function createMeme(details) {
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  // Add img
  const img = makeImg(details.img_url);
  memeContainer.append(img);

  // Add optional title
  const title = makeDetail(details, "img_title");
  if (title !== null) memeContainer.append(title);

  //Add optional description
  const description = makeDetail(details, "img_description");
  if (description !== null) memeContainer.append(description);

  // Add id
  memeContainer.id = details.id;

  // Add remove button
  const removeButton = makeRemoveButton();
  memeContainer.append(removeButton);

  //Toggle visibility of remove button with a mouse hover
  memeContainer.addEventListener("mouseenter", revealRemoveButton);
  memeContainer.addEventListener("mouseleave", hideRemoveButton);

  return memeContainer;
}

/* Make a div that holds descriptive details
return null if details are empty */
function makeDetail(details, id) {
  const text = details[id];
  if (text === "") return null;

  const div = document.createElement("div");
  div.innerText = text;
  div.classList.add(id);

  return div;
}

function makeImg(url) {
  const img = document.createElement("img");
  img.classList.add("meme");
  img.src = url;

  //Check if URL is a valid image
  img.addEventListener("error", function () {
    createErrorMessage("URL is not a valid image");
    //TODO: Use a promise async / await to stop executing the code IF the url is invalid.
    imgList.lastChild.remove();
  });

  return img;
}

function makeRemoveButton() {
  const btn = document.createElement("button");
  btn.classList.add("remove");
  btn.setAttribute("name", "remove");
  btn.innerText = "Delete";

  btn.addEventListener("click", removeMeme);

  return btn;
}

function removeMeme(evt) {
  const target = evt.target;

  target.parentNode.remove();

  const id = target.parentNode.id;
  console.log("ID", id);
  removeMemeFromLocalStorage(id);
}

function removeMemeFromLocalStorage(id){
  const memes = JSON.parse(localStorage.getItem("memes"));

  //Search for meme to remove
  // for(let i = 0; i < memes.length; i++){
  //   const meme = memes[i];

  //   if(+meme.id === +id) {

  //     //remove meme
  //     memes.splice(i, 1);

  //     break;
  //   }
  // }

  const removePosition = memes.findIndex((meme) => {
    return +meme.id === +id;
  });
  memes.splice(removePosition, 1);

  //add modified data
  localStorage.setItem("memes", JSON.stringify(memes));
}

function revealRemoveButton(evt) {
  const btn = evt.target.children.namedItem("remove");

  btn.style.display = "block";
}

function hideRemoveButton(evt) {
  const btn = evt.target.children.namedItem("remove");

  btn.style.display = "none";
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