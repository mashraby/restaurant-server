const { sign } = require("../../utils/jwt");
const categorieModel = require("./model");

module.exports = {
  Query: {
    categories: async () => {
      try {
        return await categorieModel.getCategories();
      } catch (err) {
        throw new Error(err.message);
      }
    }
  },
  Mutation: {
    newCategorie: async (_, { name, img_url }) => {
      try {
        const newCtg = await categorieModel.createdCategorie(name, img_url);
        return newCtg;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    deleteCategorie: async (_, { id }) => {
        try {
            const deletedCategorie = await categorieModel.deleteCategorie(id)
            return deletedCategorie
        } catch(err) {
            throw new Error(err.message)
        }
    }
   },
  Categorie: {
    id: (g) => g.categorie_id,
    name: (g) => g.categorie_name,
    img_url: (g) => g.categorie_img,
  },
};
