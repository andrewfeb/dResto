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
    const restaurants = await favoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('resto-list');
    restaurantsContainer.restaurants = restaurants;
  },
};

export default favorite;
