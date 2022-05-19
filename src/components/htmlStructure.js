import renderToDom from '../scripts/helpers/renderToDom';

// HTML STRUCTURE
const app = () => {
  const domstring = `<div id="main">
  <h1>Get Lyrics!🎵 🎶</h1>
  
  <form>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Artist</span>
  <input id="artistInput" type="text" class="form-control" required>
</div>
<div  class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Song</span>
  <input id="songInput" type="text" class="form-control" required>
</div>
<button id="postLyrics" type="submit" class="btn btn-info">Get Lyrics</button>
</form>
  <div id="lyricsDiv"></div>
  </div>`;
  renderToDom('#app', domstring);
};

export default app;
