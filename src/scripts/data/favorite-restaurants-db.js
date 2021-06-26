import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { databaseName, databaseVersion, objectStoreName } = CONFIG;

const dbPromise = openDB(databaseName, databaseVersion, {
  upgrade(database) {
    database.createObjectStore(objectStoreName, { keyPath: 'id' });
  },
});

const favoriteRestaurantIdb = {
  async get(id) {
    if (!id) {
      return false;
    }

    return (await dbPromise).get(objectStoreName, id);
  },
  async getAll() {
    return (await dbPromise).getAll(objectStoreName);
  },
  async put(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return false;
    }

    return (await dbPromise).put(objectStoreName, restaurant);
  },
  async delete(id) {
    return (await dbPromise).delete(objectStoreName, id);
  },
};

export default favoriteRestaurantIdb;
