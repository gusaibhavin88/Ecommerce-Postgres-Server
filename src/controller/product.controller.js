const constants = require("../../config/constants");
const {
  GENERAL,
  PRODUCTS,
  USERS,
} = require("../../messages/response.messages");
const { sendResponse } = require("../../utilities/common.service");
const {
  isProductExistService,
  createProductService,
  deleteProductService,
  getAllProductsService,
  getProductService,
  createProductReviewService,
  getReviewsByProductService,
  getReviewsByUserService,
  getReviewsService,
} = require("../services/product.service");

// Create Products
exports.createProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const isExists = await isProductExistService(name);

    if (isExists) {
      return sendResponse(
        res,
        constants.WEB_STATUS_CODE.BAD_REQUEST,
        constants.STATUS_CODE.FAIL,
        GENERAL.PRODUCT_ALREADY_EXIST,
        null,
        req.headers.lang
      );
    } else {
      const createProduct = await createProductService(req.body);

      console.log(createProduct);
      return sendResponse(
        res,
        constants.WEB_STATUS_CODE.OK,
        constants.STATUS_CODE.SUCCESS,
        PRODUCTS.CREATED,
        createProduct
      );
    }
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllProductsService();

    const count = allProducts.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.GETALL,
      allProducts,
      req.headers.lang,
      null,
      count
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};

//Delete Products
exports.deleteProduct = async (req, res) => {
  try {
    await deleteProductService(req.params.id);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.DELETE,
      null,
      req.headers.lang
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};

//GetOne Products
exports.getProduct = async (req, res) => {
  try {
    const product = await getProductService(req.params.id);
    if (!product) {
      return sendResponse(
        res,
        constants.WEB_STATUS_CODE.NO_DATA,
        constants.STATUS_CODE.NOT_FOUND,
        null,
        null
      );
    } else {
      return sendResponse(
        res,
        constants.WEB_STATUS_CODE.OK,
        constants.STATUS_CODE.SUCCESS,
        PRODUCTS.GET_ONE,
        product,
        req.headers.lang
      );
    }
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};

exports.createProductReview = async (req, res) => {
  const { userId, rating, comment } = req.body;
  const { productId } = req.params;
  try {
    const createProductReview = await createProductReviewService({
      ...req.body,
      productId: productId,
    });

    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.CREATE_REVIEW,
      createProductReview
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};

exports.getReviews = async (req, res) => {
  try {
    const getReviews = await getReviewsService();
    const count = getReviews.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.GETALL_REVIEWS,
      getReviews,
      req.headers.lang,
      null,
      count
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};
exports.getReviewsByProducts = async (req, res) => {
  const { productId } = req.params;
  try {
    const getReviews = await getReviewsByProductService(productId);
    const count = getReviews.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.GETALL_REVIEWS,
      getReviews,
      req.headers.lang,
      null,
      count
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};
exports.getReviewsByUsers = async (req, res) => {
  try {
    const getReviews = await getReviewsByUserService(req.body.userId);
    const count = getReviews.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      PRODUCTS.GETALL_REVIEWS,
      getReviews,
      req.headers.lang,
      null,
      count
    );
  } catch (err) {
    console.log("Error(add attendance)..", err);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.BAD_REQUEST,
      constants.STATUS_CODE.FAIL,
      GENERAL.GENERAL_ERROR_CONTENT,
      { message: err?.message },
      req.headers.lang
    );
  }
};
