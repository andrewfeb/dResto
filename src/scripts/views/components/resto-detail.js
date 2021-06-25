import CONFIG from '../../globals/config';

class RestoDetail extends HTMLElement {
  set restaurant(restaurant) {
    this.restaurantItem = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${CONFIG.BASE_IMAGE_URL('medium', this.restaurantItem.pictureId)}" alt="Restaurant ${this.restaurantItem.name}">
      <div class="detail-header">
        <h2 class="detail-title">${this.restaurantItem.name}</h2>
        <button aria-label="Like this restaurant" class="btn-like">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="detail-info">
        <p>${this.restaurantItem.categories.map((category) => category.name).join(' | ')}</p>
        <div class="location"><i class="fas fa-map-marker-alt"></i>${this.restaurantItem.address}, ${this.restaurantItem.city}</div>
        <div class="rating"><i class="fas fa-star"></i>${this.restaurantItem.rating}</div>
        <div>
          <h3 class="title">Description</h3>
          <p>${this.restaurantItem.description}</p>
        </div>
      </div>
      <div>
        <h3 class="title">Menu</h3>
        <div class="detail-menu">
          <div class="menu">
            <h4>Foods</h4>
            <ul>
              ${this.restaurantItem.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </div>
          <div class="menu">
            <h4>Drinks</h4>
            <ul>
              ${this.restaurantItem.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
