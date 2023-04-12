"use strict";

console.log("Let's get this party started!");

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

//getGif function -> gets the gif
async function getGif(){
  let searchTerm = $searchTerm.val();
  let gif = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: `${API_KEY}`,
      tag: `${searchTerm}`,
      rating: 'g'
    },
  });

  return gif
}

//addGifToDom -> builds the gif node and adds it to the dom
function addGifToDom(gif) {
  const newGifSource = gif.data.data.images.original.url;
  const $newGifElement = $("<img>", { src: newGifSource });

  $gifBox.append($newGifElement);
  $searchTerm.val("");
}

//deleteGifAllGifs -> clears the gifs
function deleteAllGifs() {
  $gifBox.empty();
}

async function handleClick() {
  const gif = await getGif()
  addGifToDom(gif)
}
