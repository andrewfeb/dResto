import * as testFactories from './helpers/testFactories';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-db';

describe('Unliking a Restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" class="btn-like"></button>';
  };

  beforeEach(async () => {
    addLikeButton();
    await favoriteRestaurantIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.delete(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButton({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButton({ id: 1 });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await testFactories.createLikeButton({ id: 1 });

    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await testFactories.createLikeButton({ id: 1 });

    await favoriteRestaurantIdb.delete(1);
    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
