const constants = require("../../config/constants");
const { GENERAL, PRODUCTS } = require("../../messages/response.messages");
const { sendResponse } = require("../../utilities/common.service");
const {
  isProductExistService,
  createProductService,
} = require("../services/product.service");

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
