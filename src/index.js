import "./styles.css";
import "./modern-normalize.css";

const button = document.querySelector("button");
const search = document.querySelector("input");
const image = document.querySelector("img");

function fetchGif(searchTerm) {
  if (!searchTerm) return;

  image.src = "";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=dVAHLFdSVflST46wwWAhxRHQruM4pawq&s=${searchTerm}`
  )
    .then((response) => response.json())
    .then((response) => {
      image.src = response.data.images.original.url;
    })
    .catch((error) => console.log("Error fetching GIF:", error));
}

button.addEventListener("click", () => {
  fetchGif(search.value);
});

search.addEventListener("input", (event) => {
  fetchGif(event.target.value);
});
