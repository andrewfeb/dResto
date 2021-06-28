import '../components/resto-detail';
import '../components/review-list';
import '../components/review-form';
import RestaurantsDB from '../../data/restaurantsdb-source';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import favoriteRestaurantIdb from '../../data/favorite-restaurants-db';

const detail = {
  async render() {
    return `
      <section>
        <h2 class="page-title">Detail Restaurant</h2>
        <resto-detail class="detail"></resto-detail>
      </section>
      <section>
        <h3 class="title">Customer Reviews</h3>
        <review-form></review-form>
        <customer-reviews></customer-reviews>
      </section>`;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    let data = await RestaurantsDB.get(url.id);
    const restaurantContainer = document.querySelector('resto-detail');
    const customerReviews = document.querySelector('customer-reviews');
    const btnSend = document.querySelector('#btn-send');
    restaurantContainer.restaurant = data;
    customerReviews.reviews = data.customerReviews;

    likeButtonInitiator.init({
      likeButton: document.querySelector('.btn-like'),
      favoriteRestaurants: favoriteRestaurantIdb,
      restaurant: data,
    });

    btnSend.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = document.querySelector('input[name="name"]');
      const review = document.querySelector('textarea[name="review"]');
      if (name.value === '' || review.value === '') {
        alert('Inputan tidak boleh kosong');
      } else {
        await RestaurantsDB.create({
          id: url.id,
          name: name.value,
          review: review.value,
        });
        data = await RestaurantsDB.get(url.id);
        name.value = '';
        review.value = '';
        customerReviews.reviews = data.customerReviews;
      }
    });
  },
};

export default detail;
