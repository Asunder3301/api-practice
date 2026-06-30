import "./styles.css";
import "./modern-normalize.css";

const image = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=dVAHLFdSVflST46wwWAhxRHQruM4pawq&s=cats"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    image.src = response.data.images.original.url;
  });
