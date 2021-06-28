import * as testFactories from './helpers/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-db';

describe('Like a Restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" class="btn-like"></button>';
  };

  beforeEach(() => {
    addLikeButton();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButton({ id: 1 });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButton({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await testFactories.createLikeButton({ id: 1 });

    document.querySelector('.btn-like').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantIdb.get(1);

    expect(restaurant).toEqual({ id: 1 });

    favoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await testFactories.createLikeButton({ id: 1 });

    await favoriteRestaurantIdb.put({ id: 1 });
    document.querySelector('.btn-like').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([{ id: 1 }]);

    favoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createLikeButton({});

    document.querySelector('.btn-like').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
