const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize({
  database: "ecommerce",
  username: "postgres",
  password: "Guru@0005",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.log("Issue in Database connection..", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../model/user.model.js")(sequelize, DataTypes);

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database sync successfully..");
  })
  .catch((err) => {
    console.log("Error while database sync.", err);
  });

module.exports = db;
