const {
  createUser,
  getAllUsers,
  deleteUser,
  getUser,
  loginUser,
} = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", createUser);
router.get("/getUsers", getAllUsers);
router.delete("/:id/deleteUser", deleteUser);
router.get("/:id/getUser", getUser);
router.post("/login", loginUser);

module.exports = router;
