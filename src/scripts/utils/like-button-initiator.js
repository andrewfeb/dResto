import { createIconLikeButtonTemplate, createIconUnlikeButtonTemplate } from '../views/templates/template-creator';

const likeButtonInitiator = {
  async init({ likeButton, favoriteRestaurants, restaurant }) {
    this.mLikeButton = likeButton;
    this.mRestaurant = restaurant;
    this.mFavoriteRestaurants = favoriteRestaurants;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.mRestaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderUnlike();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this.mFavoriteRestaurants.get(id);
    return !!restaurant;
  },

  renderLike() {
    this.mLikeButton.setAttribute('aria-label', 'Like this restaurant');
    this.mLikeButton.innerHTML = createIconLikeButtonTemplate();
    this.mLikeButton.addEventListener('click', async () => {
      await this.mFavoriteRestaurants.put(this.mRestaurant);
      this.renderButton();
    });
  },

  renderUnlike() {
    this.mLikeButton.setAttribute('aria-label', 'Unlike this restaurant');
    this.mLikeButton.innerHTML = createIconUnlikeButtonTemplate();
    this.mLikeButton.addEventListener('click', async () => {
      await this.mFavoriteRestaurants.delete(this.mRestaurant.id);
      this.renderButton();
    });
  },
};

export default likeButtonInitiator;
