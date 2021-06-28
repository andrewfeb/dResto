import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAll()).forEach(async (restaurant) => {
      await favoriteRestaurantIdb.delete(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurantIdb);
});
