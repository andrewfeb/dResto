import API from '../globals/api';
import CONFIG from '../globals/config';

class RestaurantsDB {
  static async getAll() {
    const response = await fetch(API.LIST);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async get(id) {
    const response = await fetch(API.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }

  static async create(data) {
    const response = await fetch(API.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.TOKEN_KEY,
      },
      body: JSON.stringify(data),
    });

    return response;
  }
}

export default RestaurantsDB;
