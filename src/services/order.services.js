const db = require("../../config/database");

const Products = db.products;
const Reviews = db.reviews;
const Orders = db.orders;

exports.createOrderService = async (data) => {
  const createOrder = await Orders.create(data);
  return createOrder;
};

exports.getAllOrderService = async () => {
  const getAllOrder = await Orders.findAll();
  return getAllOrder;
};
exports.deleteOrderService = async (id) => {
  const deleteOrder = await Orders.destroy({
    where: {
      id: String(id),
    },
  });
  return deleteOrder;
};

exports.getOrderService = async (id) => {
  const getOrder = await Orders.findAll({
    where: {
      userId: String(id),
    },
  });
  return getOrder;
};
