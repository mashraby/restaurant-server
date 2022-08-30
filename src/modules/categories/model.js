const { fetch, fetchAll } = require("../../utils/postgres");

const ALL_CATEGORIES = `
    SELECT * FROM categories
`;

const NEW_CATEGORIE = `
    INSERT INTO categories(categorie_name, categorie_img) VALUES($1, $2) RETURNING *
`;

const DELETE_CATEGORIE = `
    DELETE FROM categories WHERE categorie_id=$1 RETURNING *
`

const getCategories = () => fetchAll(ALL_CATEGORIES);
const createdCategorie = (name, img_url) => fetch(NEW_CATEGORIE, name, img_url);
const deleteCategorie = (id) => fetch(DELETE_CATEGORIE, id)

module.exports = {
  getCategories,
  createdCategorie,
  deleteCategorie
};