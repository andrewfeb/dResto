class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-content">
          <h1>Discover a Culinary Spot</h1>
          <p>We will help you discover a restaurant you like</p>
          <a href="#" class="btn btn-gold">Our List</a>
      </div>`;
  }
}

customElements.define('hero-component', Hero);
