const constants = require("../../config/constants");
const { USERS, GENERAL } = require("../../messages/response.messages");
const { sendResponse } = require("../../utilities/common.service");
const {
  createUserService,
  getAllUsersService,
} = require("../services/user.service");

exports.createUser = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.CREATED,
      constants.STATUS_CODE.SUCCESS,
      USERS.CREATED,
      newUser,
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

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsersService();
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      USERS.GETALL,
      allUsers,
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
