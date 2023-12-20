const {
  createOrder,
  getAllOrders,
  deleteOrder,
  getOrder,
} = require("../controller/order.controller");

const router = require("express").Router();

router.post("/create", createOrder);
router.get("/allorders", getAllOrders);
router.delete("/:id/delete", deleteOrder);
router.get("/:id/getOrder", getOrder);

module.exports = router;
