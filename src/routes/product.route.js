const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  createProductReview,
  getReviewsByProducts,
  getReviewsByUsers,
  getReviews,
} = require("../controller/product.controller");

const router = require("express").Router();

router.post("/create", createProduct);
router.get("/getproducts", getAllProducts);
router.get("/:id/getproduct", getProduct);
router.delete("/:id/delete", deleteProduct);
router.post("/:productId/createreview", createProductReview);
router.get("/allreview", getReviews);
router.get("/:productId/reviews", getReviewsByProducts);
router.get("/reviews/user", getReviewsByUsers);
module.exports = router;
