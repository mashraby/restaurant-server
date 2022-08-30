const { fetch, fetchAll } = require("../../utils/postgres");

const ALL_RESTAURANTS = `
    SELECT * FROM restaurants
`;

const RESTAURANT_BY_ID = `
    SELECT * FROM restaurants WHERE categorie_ref_id = $1 
`;

const NEW_RESTAURANT = `
  INSERT INTO restaurants(restaurant_name, restaurant_img, categorie_ref_id) VALUES($1, $2, $3) RETURNING * 
`;

const DELETE_RESTAURANT = `
  DELETE FROM restaurants WHERE restaurant_id=$1 RETURNING * 
`;

const getRestaurants = () => fetchAll(ALL_RESTAURANTS);
const restaurantById = (categorie_id) =>
  fetchAll(RESTAURANT_BY_ID, categorie_id);
const createRestaurant = (name, img_url, ctgId) =>
  fetch(NEW_RESTAURANT, name, img_url, ctgId);

const deleteRestaurant = (id) => fetch(DELETE_RESTAURANT, id);

module.exports = {
  getRestaurants,
  restaurantById,
  createRestaurant,
  deleteRestaurant,
};
