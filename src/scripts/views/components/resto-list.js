import './resto-item';

class RestoList extends HTMLElement {
  set restaurants(restaurants) {
    this.restaurantsList = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.restaurantsList.forEach((restaurant) => {
      const restaurantItem = document.createElement('resto-item');
      restaurantItem.classList.add('card');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2>${message}</h2>`;
  }
}

customElements.define('resto-list', RestoList);
