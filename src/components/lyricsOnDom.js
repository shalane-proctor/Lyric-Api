import getLyrics from '../api/getLyrics';
import renderToDom from '../scripts/helpers/renderToDom';

// API Call & Lyrics Card HTML
const lyricsOnDom = (artist, song) => {
  // this is a promise.
  getLyrics(artist, song).then((response) => {
    const domstring = `<div class="d-flex justify-content-center align-items-center container ">
    <div class="card">
  <div id="cardTitle">
    Lyrics
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p class="lyrics">${response.lyrics}</p>
      <footer id="artistTitle" class="blockquote-footer"></footer>
    </blockquote>
  </div>
</div>
</div>`;
    renderToDom('#lyricsDiv', domstring);
  });
};

export default lyricsOnDom;
