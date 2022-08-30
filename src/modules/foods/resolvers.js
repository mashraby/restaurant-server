const foodModel = require("./model");

module.exports = {
  Query: {
    foodsAll: async () => {
      try {
        return await foodModel.getFoods();
      } catch (err) {
        throw new Error(err.message);
      }
    },
    foods: async (_, { restaurant_id }) => {
      try {
        return await foodModel.foodById(restaurant_id);
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    newFood: async (_, { name, price, img_url, rstId }) => {
      try {
        const cretedFood = await foodModel.createFood(
          name,
          price,
          img_url,
          rstId
        );
        return cretedFood;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    deleteFood: async (_, { id }) => {
      try {
        const deleteFood = await foodModel.deleteFood(id);
        return deleteFood;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Food: {
    id: (g) => g.food_id,
    name: (g) => g.food_name,
    price: (g) => g.food_price,
    img_url: (g) => g.food_img,
  },
};
