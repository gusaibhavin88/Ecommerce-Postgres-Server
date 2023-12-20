const express = require("express");
const router = express.Router();
const userRouter = require("../routes/user.route");
const productRouter = require("../routes/product.route");
const orderRoute = require("../routes/order.route");

router.use("/v1/user", userRouter);
router.use("/v1/product", productRouter);
router.use("/v1/order", orderRoute);

module.exports = router;
