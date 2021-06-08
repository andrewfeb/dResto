class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="sticky">
        <a href="/" class="logo"><span>D</span>'RESTO</a>
        <button type="button" class="menu-toggle" aria-label="Menu Toggle">
          <i class="fas fa-bars"></i>
        </button>
        <ul>
          <li><a class="active" href="#/">HOME</a></li>
          <li><a href="#/favorite">FAVORITE</a></li>
          <li><a href="https://github.com/andrewfeb" target="_blank" rel="noreferrer">ABOUT</a></li>
        </ul>
      </nav>`;
  }
}

customElements.define('app-bar', AppBar);
