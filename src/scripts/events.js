import lyricsOnDom from '../components/lyricsOnDom';

const events = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const artistEntry = document.querySelector('#artistInput').value;
    const songEntry = document.querySelector('#songInput').value;
    lyricsOnDom(artistEntry, songEntry);
    form.reset();
    document.querySelector('#artistTitle').innerHTML = artistEntry;
  });
};

export default events;
