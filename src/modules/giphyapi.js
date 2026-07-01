export class Giphy {
  static async fetchGif(element, searchTerm) {
    if (!searchTerm) return;
    element.src = "";

    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=dVAHLFdSVflST46wwWAhxRHQruM4pawq&s=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const imageData = await response.json();
      element.src = imageData.data.images.original.url;
    } catch (error) {
      console.log("Error fetching GIF: ", error);
    }
  }
}
