import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
// import webSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  const header = document.querySelector('nav');
  app.renderPage();
  swRegister();
  // webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

  // sticky header/navbar
  window.addEventListener('scroll', () => {
    if (app.url === null) {
      header.classList.toggle('sticky', window.scrollY > 10);
    }
  });

  const btnTop = document.querySelector('.btn-top');
  // show or hidden top button
  window.onscroll = () => {
    const height = document.body.scrollTop || document.documentElement.scrollTop;

    if (height > 100) {
      btnTop.classList.remove('hidden');
    } else {
      btnTop.classList.add('hidden');
    }
  };

  // scroll back to top page
  const smoothScroll = (height) => {
    const i = height || document.documentElement.scrollTop;
    if (i > -1) {
      setTimeout(() => {
        window.scrollTo(0, i);
        smoothScroll(i - 50);
      }, 10);
    }
  };

  btnTop.addEventListener('click', () => smoothScroll());
});
