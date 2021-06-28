import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import favoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurants-db';

const createLikeButton = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButton: document.querySelector('.btn-like'),
    favoritesRestaurants: favoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButton };
