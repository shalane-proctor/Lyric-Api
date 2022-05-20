import renderToDom from '../scripts/helpers/renderToDom';

// HTML STRUCTURE
const app = () => {
  const domstring = `<div id="main">
  <h1>What are the lyrics?</h1>
<form>
<div class="d-flex justify-content-center align-items-center container ">
  <div id="inpuntContainer" class="row">
    <div class="col md">
      <div class="form-floating">
        <input id="artistInput" type="text" class="form-control">
        <label for="artistInput">Artist</label>
      </div>
    </div>
  <div class="col">
    <div class="form-floating">
      <input id="songInput"  type="text" class="form-control">
      <label for="songInput">Song</label>
    </div>
  </div>
</div>
</div>
<div id="buttonContainer">
<button id="postLyrics" type="submit" class="btn btn-info">Get lyrics</button>
</div>
</form>
  <div id="lyricsDiv"></div>
  </div>`;
  renderToDom('#app', domstring);
};

export default app;
