import '../components/resto-list';
import RestaurantsDbSource from '../../data/restaurantsdb-source';

const home = {
  async render() {
    return `
      <hero-component class="hero"></hero-component>
      <section>
        <div class="list-title">
            <h2>List Restaurant</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <resto-list class="list"></resto-list>
      </section>
      <section class="subscription">
          <p>Register your email address to get restaurant information</p>
          <div class="field">
              <input type="email" class="input" name="email" placeholder="Entry your email address">
              <button type="button" class="btn btn-gold">Register</button>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('resto-list');
    restaurantsContainer.restaurants = restaurants;
  },
};

export default home;
