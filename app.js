console.log("Let's get this party started!");

// https://api.giphy.com/v1/gifs/search?api_key=nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC
// &q=&limit=1&offset=0&rating=pg&lang=en

// https://api.giphy.com/v1/gifs/search?api_key=nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC&q=hamster&limit=1&offset=0&rating=pg&lang=en
const $searchGifs = $("#search-button");
const $searchTerm = $("#search-term");
const $gifBox = $("#gifs");
const $deleteGifs = $("#delete-button");

const returnGif = async function () {
  let term = $searchTerm.val();

  let gif = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC",
      q: `${term}`,
      limit: 1,
      offset: 1,
      rating: "pg",
      lang: "en",
    },
  });

  console.log("gif.data.url=", gif.data.data[0].url);
  const newGifSource = gif.data.data[0].url;

  const $newGifElement = $("<div>")
    .addClass("gif-container")
    .css("background-image",`url(${newGifSource})`);

  //create a new element to hold the gif
  //set the background property as the gif URL
  //style the gif appropriately to contain it

  //append the created gif element to the DOM

  $gifBox.append($newGifElement);
};

$searchGifs.on("click", returnGif);
