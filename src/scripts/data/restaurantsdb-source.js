import API from '../globals/api';

class RestaurantsDbSource {
  static async listRestaurants() {
    const response = await fetch(API.LIST);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantsDbSource;
