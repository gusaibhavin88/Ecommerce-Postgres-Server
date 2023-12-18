const constants = require("../../config/constants");
const { USERS, GENERAL } = require("../../messages/response.messages");
const userModel = require("../../model/user.model");
const { sendResponse } = require("../../utilities/common.service");
const {
  createUserService,
  getAllUsersService,
  deleteUserService,
  getUserService,
  loginUser,
  isUserExistService,
} = require("../services/user.service");

exports.createUser = async (req, res) => {
  try {
    const isExist = await isUserExistService(req.body.email);
    if (isExist) {
      return sendResponse(
        res,
        constants.WEB_STATUS_CODE.BAD_REQUEST,
        constants.STATUS_CODE.FAIL,
        GENERAL.EMAIL_ALREADY_EXIST
      );
    }
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

    const count = allUsers.length;
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      USERS.GETALL,
      allUsers,
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

exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    await deleteUserService(req.params.id);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      USERS.DELETE,
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

exports.getUser = async (req, res) => {
  try {
    const user = await getUserService(req.params.id);
    return sendResponse(
      res,
      constants.WEB_STATUS_CODE.OK,
      constants.STATUS_CODE.SUCCESS,
      USERS.GET_ONE,
      user,
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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email);
    if (user) {
      const isMatch = await user.comparePassword(password);
      if (isMatch) {
        return sendResponse(
          res,
          constants.WEB_STATUS_CODE.OK,
          constants.STATUS_CODE.SUCCESS,
          USERS.LOGGED_IN,
          user,
          req.headers.lang
        );
      } else {
        return sendResponse(
          res,
          constants.WEB_STATUS_CODE.BAD_REQUEST,
          constants.STATUS_CODE.FAIL,
          GENERAL.INVALID_LOGIN,
          null,
          req.headers.lang
        );
      }
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

exports.logOut = async (req, res) => {
  try {
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
