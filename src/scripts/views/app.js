import drawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/app-bar';
import './components/hero';

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

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.resource = urlParser.parseActiveUrlWithoutCombiner().resource;
    this.mContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
