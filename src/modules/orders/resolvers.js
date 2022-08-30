const orderModel = require("./model");

module.exports = {
  Query: {
    orders: async () => {
      try {
        return await orderModel.getOrders();
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Order: {
    id: (g) => g.order_id,
    client: (g) => g.order_client,
    location: (g) => g.order_location,
    phone: (g) => g.order_phone_number,
    purchase: (g) => g.order_purchase,
    time: (g) => g.order_time,
  },
  Mutation: {
    createOrder: async (_, { client, location, phone, purchase, time }) => {
      const createdUser = await orderModel.createOrder(
        client,
        location,
        phone,
        purchase,
        time
      );
      return createdUser;
    },
  },
};
