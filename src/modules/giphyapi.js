export class Giphy {
  static fetchGif(element, searchTerm) {
    if (!searchTerm) return;

    element.src = "";
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=dVAHLFdSVflST46wwWAhxRHQruM4pawq&s=${searchTerm}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! status: ", response.status);
        }
        return response.json();
      })
      .then((response) => {
        element.src = response.data.images.original.url;
      })
      .catch((error) => console.log("Error fetching GIF: ", error));
  }
}
