const { fetch, fetchAll } = require("../../utils/postgres");

const ALL_ORDERS = `
    SELECT * FROM orders
`;

const CREATE_ORDER = `
    INSERT INTO 
        orders(order_client, order_location, order_phone_number, order_purchase, order_time)
        VALUES($1, $2, $3, $4, $5) RETURNING * 
`;

const getOrders = () => fetchAll(ALL_ORDERS);
const createOrder = (client, location, phone, purchase, time) =>
  fetch(CREATE_ORDER, client, location, phone, purchase, time);

module.exports = {
  getOrders,
  createOrder,
};
