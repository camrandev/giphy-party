"use strict";

console.log(localStorage)

renderStoredGifs()

/** global constants */
//API would normally never be pushed to github
const API_KEY = "nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC";
const BASE_URL = "https://api.giphy.com/v1/gifs/random";

/**jQuery Elements */
const $searchGifs = $("#search-button");
const $searchTerm = $("#search-term");
const $gifBox = $("#gifs");
const $deleteGifs = $("#delete-button");

/**Event listeners */
$searchGifs.on("click", handleClick);
$deleteGifs.on("click", deleteAllGifs);

/** makes API call and returns a single gif object */
async function getGif() {
  let searchTerm = $searchTerm.val();
  let gif = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: `${API_KEY}`,
      tag: `${searchTerm}`,
      rating: "pg",
    },
  });

  return gif;
}

/**builds a gif element and appends that element to the dom */
function addGifToDom(gifObject) {
  storeGif(gifObject);
  const newGifImage = gifObject.data.data.images.original.url;
  const newGifId = gifObject.data.data.id;

  const $newGifElement = $("<img>", { src: newGifImage });
  $newGifElement.addClass("gif");
  $newGifElement.attr("id", `${newGifId}`);

  $gifBox.append($newGifElement);

  $searchTerm.val("");
}

/**deletes all of the gifs currently displayed */
function deleteAllGifs() {
  $gifBox.empty();
}

/**stores the entire gifObject returned from getGif in local storage
 * uses ID from API as key
 */
function storeGif(gifObject) {
  const gifId = gifObject.data.data.id;
  localStorage.setItem(`${gifId}`, JSON.stringify(gifObject));
}

/**renders all gifs stored in local storage on load, allowing data to persist */
function renderStoredGifs() {
  for (let item of localStorage) {
    console.log('item=', item)
  }
}

/**controller function that calls getGif and adds returned gif to the dom */
async function handleClick() {
  const gif = await getGif();
  addGifToDom(gif);
}

//add local storage for persistence. Focus on one task at once
//for local storage
//need to add it on creation and clear local storage on delete all

//allow deletion of individual gifs
//allow voting on gifs -> tied to local storage?
//style the page
