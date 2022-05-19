import getLyrics from '../api/getLyrics';
import renderToDom from '../scripts/helpers/renderToDom';

// API Call & Lyrics Card HTML
const lyricsOnDom = (artist, song) => {
  // this is a promise.
  getLyrics(artist, song).then((response) => {
    const domstring = `<div class="card bg-dark text-white">
  <img src="https://cdn.pixabay.com/photo/2017/10/11/23/35/musical-background-2842924_960_720.jpg" alt="music background" class="card-img">
  <div class="card-img-overlay">
    <h5 id="artistTitle"></h5>
    <p class="lyrics">${response.lyrics}</p>
  </div>
</div>`;
    renderToDom('#lyricsDiv', domstring);
  });
};

export default lyricsOnDom;
