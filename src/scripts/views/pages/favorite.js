import '../components/resto-list';
import favoriteRestaurantIdb from '../../data/favorite-restaurants-db';

const favorite = {
  async render() {
    return `
      <section class="favorite">
        <h2 class="page-title">Favorite Restaurant</h2>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurantIdb.getAll();
    const favoriteContainer = document.querySelector('.favorite');
    if (restaurants.length === 0) {
      const error = document.createElement('span');
      error.innerHTML = 'You don&#39;t have any favorite restaurant';
      favoriteContainer.appendChild(error);
    } else {
      const restaurantsContainer = document.createElement('resto-list');
      restaurantsContainer.classList.add('list');
      favoriteContainer.appendChild(restaurantsContainer);
      restaurantsContainer.restaurants = restaurants;
    }
  },
};

export default favorite;
