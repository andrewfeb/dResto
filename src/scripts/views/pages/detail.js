import '../components/resto-detail';
import '../components/review-list';
import '../components/review-form';
import RestaurantsDbSource from '../../data/restaurantsdb-source';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import addReview from '../../utils/add-review';

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
    const data = await RestaurantsDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('resto-detail');
    const customerReviews = document.querySelector('customer-reviews');
    const btnSend = document.querySelector('#btn-send');
    console.log(data.customerReviews);
    restaurantContainer.restaurant = data;
    customerReviews.reviews = data.customerReviews;

    likeButtonInitiator.init({
      restaurant: data,
    });

    btnSend.addEventListener('click', (event) => {
      event.preventDefault();
      const name = document.querySelector('input[name="name"]');
      const review = document.querySelector('textarea[name="review"]');
      if (name.value === '' || review.value === '') {
        alert('Inputan tidak boleh kosong');
      } else {
        addReview(url.id, name.value, review.value);
        const data1 = RestaurantsDbSource.detailRestaurant(url.id);
        console.log(data1);
        // customerReviews.reviews = data1.customerReviews;
      }
    });
  },
};

export default detail;
