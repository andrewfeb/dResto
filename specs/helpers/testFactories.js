import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButton = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButton: document.querySelector('.btn-like'),
    restaurant,
  });
};

export { createLikeButton };
