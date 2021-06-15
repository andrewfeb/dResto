import RestaurantsDbSource from '../data/restaurantsdb-source';

const addReview = (id, name, review) => {
  const data = {
    id,
    name,
    review,
  };

  return RestaurantsDbSource.addReview(data);
};

export default addReview;
