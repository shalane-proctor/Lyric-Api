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

const app = () => {
  const domstring = `<div id="main">
  <h1>Get Lyrics!🎵 🎶</h1>
  <button id="postLyrics" type="button" class="btn btn-info">Get Lyrics</button>
  </div>`;
  renderToDom('#app', domstring);
};

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const eventListener = () => {
  document.querySelector('#postLyrics').addEventListener('click', (e) => {
    if (e.target.id === 'postLyrics') {
      console.log('button clicked');
    }
  });
};

const startApp = () => {
  app();
  lyricsOnDom();
  eventListener();
};

startApp();
