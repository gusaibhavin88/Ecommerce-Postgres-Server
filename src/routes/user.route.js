const { createUser, getAllUsers } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", createUser);
router.get("/getUsers", getAllUsers);

module.exports = router;
