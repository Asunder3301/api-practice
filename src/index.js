import "./styles.css";
import "./modern-normalize.css";
import { Giphy } from "./modules/giphyapi.js";

const button = document.querySelector("button");
const search = document.querySelector("input");
const image = document.querySelector("img");

button.addEventListener("click", () => {
  Giphy.fetchGif(image, search.value);
});

search.addEventListener("input", (event) => {
  Giphy.fetchGif(image, event.target.value);
});
