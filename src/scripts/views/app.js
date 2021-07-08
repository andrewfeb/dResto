import drawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { loader } from './templates/template-creator';

class App {
  constructor({
    button,
    drawer,
    content,
  }) {
    this.mButton = button;
    this.mDrawer = drawer;
    this.mContent = content;

    this.initialAppShell();
  }

  get url() {
    return this.resource;
  }

  initialAppShell() {
    drawerInitiator.init({
      button: this.mButton,
      drawer: this.mDrawer,
      content: this.mContent,
    });
  }

  isNotHome(currentMenu) {
    this.menu = currentMenu;
    if (this.menu === null) {
      return false;
    }
    return true;
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const loading = document.querySelector('#loading');
    const main = document.querySelector('#main-content');
    this.resource = urlParser.parseActiveUrlWithoutCombiner().resource;
    this.mContent.innerHTML = await page.render();

    await page.afterRender();
    loading.innerHTML = loader();
    main.style.display = 'none';
    loading.remove();
    main.style.display = 'block'; 
    /*loading.style.display = 'none';
    */

    // add active class in current menu
    const menus = document.querySelectorAll('.active');
    menus.forEach((menu) => {
      menu.classList.remove('active');
    });
    const currentMenu = document.querySelector(`a[href="#${url}"`);
    if (this.isNotHome(currentMenu)) {
      currentMenu.classList.add('active');
    }

    // add sticky in header
    const header = document.querySelector('nav');
    if (this.url === null) {
      header.classList.remove('sticky');
    } else {
      header.classList.add('sticky');
    }
  }
}

export default App;
