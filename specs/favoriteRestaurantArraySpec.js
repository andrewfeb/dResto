import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {

  get(id) {
    if (!id) {
      return false;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAll() {
    return favoriteRestaurants;
  },

  put(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return false;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.get(restaurant.id)) {
      return false;
    }

    favoriteRestaurants.push(restaurant);
    return true;
  },

  delete(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
