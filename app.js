"use strict";

console.log("Let's get this party started!");

/** global constants */
//API would normally never be pushed to github
const API_KEY = "nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC";
const BASE_URL = "https://api.giphy.com/v1/gifs/random";

const $searchGifs = $("#search-button");
const $searchTerm = $("#search-term");
const $gifBox = $("#gifs");
const $deleteGifs = $("#delete-button");

/** return requested gif based on searchTerm.val() */
const returnGif = async function () {
  let term = $searchTerm.val();
  let gif = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: `${API_KEY}`,
      tag: `${term}`,
      rating: 'g'
      // limit: 1,
      // offset: 1,
      // rating: "pg",
      // lang: "en",
    },
  });

  const newGifSource = gif.data.data.images.original.url;
  const $newGifElement = $("<img>", { src: newGifSource });

  $gifBox.append($newGifElement);
  $searchTerm.val("");
};

//TODO:refactor into 'handleClick controller'
//TODO:build helper functions for handleClick
//-get gif
//-addGifToDom
/** perform returnGif on search button click */
$searchGifs.on("click", returnGif);

//TODO: refactor into named function
/** remove all gifs from gifs div */
$deleteGifs.on("click", () => {
  $gifBox.empty();
});
