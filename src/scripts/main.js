// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const renderToDom = (divId, textToRender) => {
  const selectElement = document.querySelector(divId);
  selectElement.innerHTML = textToRender;
};

// HTML STRUCTURE
const app = () => {
  const domstring = `<div id="main">
  <h1>Get Lyrics!🎵 🎶</h1>
  
  <form>
  <div id="artistInput" class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Artist</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div id="songInput" class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Song</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<button id="postLyrics" type="button" class="btn btn-info">Get Lyrics</button>
</form>
  <div id="lyricsDiv"></div>
  </div>`;
  renderToDom('#app', domstring);
};

// API Call & Lyrics Card HTML
const lyricsOnDom = (artist, song) => {
  // this is a promise.
  getLyrics(artist, song).then((response) => {
    const domstring = `<div class="card bg-dark text-white">
  <img src="https://cdn.pixabay.com/photo/2017/10/11/23/35/musical-background-2842924_960_720.jpg" alt="music background" class="card-img">
  <div class="card-img-overlay">
    <h5 class="artistName">${response.artist}</h5>
    <p class="lyrics">${response.lyrics}</p>
  </div>
</div>`;
    renderToDom('#lyricsDiv', domstring);
  });
};

const eventListener = () => {
  document.querySelector('#postLyrics').addEventListener('click', () => {
    lyricsOnDom('prince', 'purple rain');
  });
  // document.querySelector('form').addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const artistEntry = document.querySelector('#artistInput').value;
  //   const songEntry = document.querySelector('#songInput').value;
  //   const errorMessage = 'Song not found';
  //   getLyrics(artistEntry, songEntry).then((response) => {
  //     if (artistEntry === response.artist && songEntry === response.song) {
  //       lyricsOnDom(response.arist, response.song);
  //     } else { lyricsOnDom(errorMessage); }
  //   });
  // });
};

const startApp = () => {
  app();
  lyricsOnDom();
  eventListener();
};

startApp();
