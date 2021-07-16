const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: (size, pictureId) => `https://restaurant-api.dicoding.dev/images/${size}/${pictureId}`,
  DB_NAME: 'restaurant-db',
  DB_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: 'RestaurantCatalogue',
  WEB_SOCKET_SERVER: 'wss://restaurant-api.dicoding.dev/',
  TOKEN_KEY: '12345',
};

export default CONFIG;
