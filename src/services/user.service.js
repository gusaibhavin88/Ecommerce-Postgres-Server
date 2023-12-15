const db = require("../../config/database");
const userModel = require("../../model/user.model");
const Users = db.users;

exports.createUserService = async (data) => {
  const createUser = await Users.bulkCreate(data);
  return createUser;
};

exports.getAllUsersService = async () => {
  const getAllUsers = await Users.findAll();
  return getAllUsers;
};
