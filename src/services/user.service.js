const db = require("../../config/database");
const userModel = require("../../model/user.model");
const Users = db.users;

exports.createUserService = async (data) => {
  const createUser = await Users.create(data);
  return createUser;
};

exports.isUserExistService = async (email) => {
  const isExist = await Users.findOne({
    where: {
      email: email,
    },
  });
  return isExist;
};

exports.getAllUsersService = async () => {
  const getAllUsers = await Users.findAll();
  return getAllUsers;
};

exports.deleteUserService = async (id) => {
  const getAllUsers = await Users.destroy({
    where: {
      id: String(id),
    },
  });
  return getAllUsers;
};

exports.getUserService = async (id) => {
  const getUser = await Users.findOne({
    where: {
      id: String(id),
    },
  });
  return getUser;
};

exports.loginUser = async (email) => {
  const getUser = await Users.findOne({
    where: {
      email: email,
    },
  });
  return getUser;
};
