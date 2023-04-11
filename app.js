console.log("Let's get this party started!");

// https://api.giphy.com/v1/gifs/search?api_key=nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC
// &q=&limit=1&offset=0&rating=pg&lang=en

const searchGifs = $('#search-button');
const searchTerm = $('#search-term').val();
const gifBox = $('#gifs');
const deleteGifs = $('#delete-button');

const returnGif = async function() {
  let gif = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {
    api_key: nIfOgRsfVgS8TJOBkvYB2r8L51kOLWBC,
    q: searchTerm,
    limit: 1,
    offset: 0,
    rating: pg,
    lang: en
  }});
  gifBox.html(gif);
}

searchGifs.on("click", returnGif);

