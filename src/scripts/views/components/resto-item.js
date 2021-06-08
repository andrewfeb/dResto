import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this.restaurantItem = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${CONFIG.BASE_IMAGE_URL('small', this.restaurantItem.pictureId)}" alt="Image Restaurant ${this.restaurantItem.name}">
      <div class="card-body">
        <a href="/#/detail/${this.restaurantItem.id}"><h3 class="card-title">${this.restaurantItem.name}</h3></a>
        <div class="location"><i class="fas fa-map-marker-alt"></i>${this.restaurantItem.city}</div>
        <div class="rating"><i class="fas fa-star"></i>${this.restaurantItem.rating}</div>
        <p class="card-text truncate">${this.restaurantItem.description}</p>
      </div>
    `;
  }
}

customElements.define('resto-item', RestoItem);
