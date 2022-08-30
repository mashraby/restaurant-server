const restaurantModel = require("./model");

module.exports = {
  Query: {
    restaurantsAll: async () => {
      try {
        return await restaurantModel.getRestaurants();
      } catch (err) {
        throw new Error(err.message);
      }
    },
    restaurants: async (_, { categorie_id }) => {
      try {
        return await restaurantModel.restaurantById(categorie_id);
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    newRestaurant: async (_, { name, img_url, ctgId }) => {
      try {
        const cretedRestaurant = await restaurantModel.createRestaurant(
          name,
          img_url,
          ctgId
        );
        return cretedRestaurant;
      } catch (err) {}
    },
    deleteRestaurant: async (_, { id }) => {
      try {
        const deletedRest = await restaurantModel.deleteRestaurant(id);
        return deletedRest;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Restaurant: {
    id: (g) => g.restaurant_id,
    name: (g) => g.restaurant_name,
    img_url: (g) => g.restaurant_img,
  },
};
