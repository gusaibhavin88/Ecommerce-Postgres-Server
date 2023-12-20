const constants = require("../../config/constants");
const { ORDERS, GENERAL } = require("../../messages/response.messages");
const { sendResponse } = require("../../utilities/common.service");
const {
  createOrderService,
  getAllOrderService,
  deleteOrderService,
  getOrderService,
} = require("../services/order.services");

// Get All Reviews

exports.createOrder = async (req, res) => {
  try {
    const createOrder = await createOrderService(req.body);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      ORDERS.CREATED,
      createOrder
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

// Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const getOrders = await getAllOrderService();
    const count = getOrders.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      ORDERS.GETALL,
      getOrders,
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

exports.deleteOrder = async (req, res) => {
  try {
    await deleteOrderService(req.params.id);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      ORDERS.DELETE,
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
exports.getOrder = async (req, res) => {
  try {
    const getOrder = await getOrderService(req.params.id);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      ORDERS.GET_ONE,
      getOrder,
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
