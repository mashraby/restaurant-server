const { fetch, fetchAll } = require("../../utils/postgres");

const ALL_FOODS = `
    SELECT * FROM foods
`;

const FOODS_BY_ID = `
    SELECT * FROM foods WHERE restaurant_ref_id = $1
`;

const NEW_FOOD = `
  INSERT INTO foods(food_name, food_price, food_img, restaurant_ref_id) VALUES($1, $2, $3, $4) RETURNING * 
`;

const DELETE_FOOD = `
  DELETE FROM foods WHERE food_id=$1
`;

const getFoods = () => fetchAll(ALL_FOODS);
const foodById = (restaurant_id) => fetchAll(FOODS_BY_ID, restaurant_id);
const createFood = (name, price, img_url, rstId) =>
  fetch(NEW_FOOD, name, price, img_url, rstId);
const deleteFood = (id) => fetch(DELETE_FOOD, id);

module.exports = {
  getFoods,
  foodById,
  createFood,
  deleteFood,
};
