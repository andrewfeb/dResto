import '../components/resto-detail';
import '../components/review-list';
import RestaurantsDbSource from '../../data/restaurantsdb-source';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';

const detail = {
  async render() {
    return `
      <section>
        <h2 class="page-title">Detail Restaurant</h2>
        <resto-detail class="detail"></resto-detail>
      </section>
      <section>
        <customer-reviews></customer-reviews>
      </section>`;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantsDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('resto-detail');
    const customerReviews = document.querySelector('customer-reviews');
    restaurantContainer.restaurant = data;
    customerReviews.reviews = data.customerReviews;

    likeButtonInitiator.init({
      restaurant: data,
    });
  },
};

export default detail;
