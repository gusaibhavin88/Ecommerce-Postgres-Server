const { createProduct } = require("../controller/product.controller");

const router = require("express").Router();

router.post("/create", createProduct);

module.exports = router;
