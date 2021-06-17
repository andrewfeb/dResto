import '../components/resto-list';
import favoriteRestaurantIdb from '../../data/favorite-restaurants-db';

const favorite = {
  async render() {
    return `
      <section class="favorite">
        <h2 class="page-title">Favorite Restaurant</h2>
        <resto-list class="list"></resto-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurantIdb.getAll();
    const restaurantsContainer = document.querySelector('resto-list');
    const favoriteContainer = document.querySelector('.favorite');
    if (restaurants.length === 0) {
      const error = document.createElement('span');
      error.innerHTML = 'You don&#39;t have any favorite restaurant';
      favoriteContainer.appendChild(error);
    } else {
      restaurantsContainer.restaurants = restaurants;
    }
  },
};

export default favorite;
