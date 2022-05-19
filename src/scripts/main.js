import app from '../components/htmlStructure';
import lyricsOnDom from '../components/lyricsOnDom';
import events from './events';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const startApp = () => {
  app();
  lyricsOnDom();
  events();
};

startApp();
