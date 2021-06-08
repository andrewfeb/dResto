import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { databaseName, databaseVersion, objectStoreName } = CONFIG;

const dbPromise = openDB(databaseName, databaseVersion, {
  upgrade(database) {
    database.createObjectStore(objectStoreName, { keyPath: 'id' });
  },
});

const favoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(objectStoreName, id);
  },
  async getAllRestaurants() {
    return (await dbPromise).getAll(objectStoreName);
  },
  async putRestaurant(restaurant) {
    return (await dbPromise).put(objectStoreName, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(objectStoreName, id);
  },
};

export default favoriteRestaurantIdb;
