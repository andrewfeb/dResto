import favoriteRestaurantIdb from '../data/favorite-restaurants-db';
import { createIconLikeButtonTemplate, createIconLikedButtonTemplate } from '../views/templates/template-creator';

const likeButtonInitiator = {
  async init({ restaurant }) {
    this.mRestaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.mRestaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    const likeButton = document.querySelector('.btn-like');
    likeButton.innerHTML = createIconLikeButtonTemplate();
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.putRestaurant(this.mRestaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    const likeButton = document.querySelector('.btn-like');
    likeButton.innerHTML = createIconLikedButtonTemplate();
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteRestaurant(this.mRestaurant.id);
      this.renderButton();
    });
  },
};

export default likeButtonInitiator;
