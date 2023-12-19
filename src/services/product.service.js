const db = require("../../config/database");

const Products = db.products;
const Reviews = db.reviews;

exports.createProductService = async (data) => {
  const createProduct = await Products.create(data);
  return createProduct;
};

exports.isProductExistService = async (name) => {
  const isExist = await Products.findOne({
    where: {
      name: name,
    },
  });
  return isExist;
};

exports.getProductService = async (id) => {
  const getProduct = await Products.findOne({
    where: {
      id: String(id),
    },
  });

  console.log(getProduct);
  return getProduct;
};

exports.getAllProductsService = async () => {
  const getAllProducts = await Products.findAll();
  return getAllProducts;
};

exports.deleteProductService = async (id) => {
  const getAllProduct = await Products.destroy({
    where: {
      id: String(id),
    },
  });
  return getAllProduct;
};

exports.createProductReviewService = async (data) => {
  const createProduct = await Reviews.create(data);
  return createProduct;
};
exports.getReviewsService = async () => {
  const getReviews = await Reviews.findAll();
  return getReviews;
};
exports.getReviewsByProductService = async (productId) => {
  const getReviewsByProduct = await Reviews.findAll({
    where: {
      productId: productId,
    },
  });
  return getReviewsByProduct;
};

exports.getReviewsByUserService = async (userId) => {
  const getReviewsByUser = await Reviews.findAll({
    where: {
      userId: userId,
    },
  });
  return getReviewsByUser;
};
