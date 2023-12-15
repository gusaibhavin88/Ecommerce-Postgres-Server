const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const createError = require("http-errors");
const indexRouter = require("./src/routes/index.route");
const { GENERAL } = require("./messages/response.messages.js");
const constants = require("./config/constants.js");
const { sendResponse } = require("./utilities/common.service.js");
require("./config/database.js");

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json()); // Removed unnecessary options
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  // Added request and response parameters
  console.log("health check");
  res.send("Health check passed"); // Added response for the health check
});

app.use(indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error("app error", err);

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error(err, "in app's error");

  res.status(err.status || 500);
  return sendResponse(
    res,
    constants.WEB_STATUS_CODE.NOT_FOUND,
    constants.STATUS_CODE.NOT_FOUND,
    GENERAL.NOT_FOUND,
    err
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
