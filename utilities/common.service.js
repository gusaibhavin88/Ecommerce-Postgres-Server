const constants = require("../config/constants");
// const jwt = require("jsonwebtoken");
const sendResponse = (
  res,
  statusCode,
  status,
  message,
  data,
  lang = "en",
  replaceObj = {}
) => {
  try {
    statusCode = +statusCode;

    res.writeHead(statusCode, { "Content-Type": "application/json" });
    // console.log(data, "response data");
    res.write(
      JSON.stringify({
        status: status,
        message: message,
        data: statusCode === 500 ? data.message : data,
      })
    );
    res.end();
  } catch (err) {
    console.log("Error(sendResponse): ", err);
    throw err;
  }
};

const responseIn = function (message, lang = "en") {
  try {
    appLanguageList = constants.APP_LANGUAGE;
    const msg =
      appLanguageList.indexOf(lang) != -1
        ? require(`../../messages/response.message`)
        : require(`../../messages/response.message`);

    let obj = message.split(".");
    keyName = obj[0];
    subKey = obj[1];

    return msg[keyName][subKey];
  } catch (err) {
    console.log("Error(responseIn): ", err);
    throw err;
  }
};

const sendResponseValidation = (
  res,
  statusCode,
  status,
  message,
  data,
  lang = "en",
  replaceObj = {}
) => {
  try {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: status,
        message: message,
        data: data,
      })
    );
    res.end();
  } catch (err) {
    console.log("Error(sendResponseValidation): ", err);
    throw err;
  }
};

const replaceString = (str, replaceObject) => {
  for (keys in replaceObject) {
    str = str.replace(keys, replaceObject[keys]);
  }
  return str;
};

const isEmptyObject = (object) => {
  if (
    Object.keys(object).length === 0 &&
    Object.getPrototypeOf(object) === Object.prototype &&
    object.constructor === Object &&
    Object.entries(object).length === 0
  ) {
    return true;
  } else {
    return false;
  }
};

const replaceStringWithObjectData = (str, object) => {
  if (!isEmptyObject(object)) {
    stringStartSymbol =
      typeof constants.ENCRYPT_STRING.START_SYMBOL === undefined
        ? "{!{"
        : constants.ENCRYPT_STRING.START_SYMBOL;

    stringEndSymbol =
      typeof constants.ENCRYPT_STRING.END_SYMBOL === undefined
        ? "}!}"
        : constants.ENCRYPT_STRING.END_SYMBOL;

    for (let data in object) {
      msg = stringStartSymbol + data + stringEndSymbol;
      str = str.replace(new RegExp(msg, "g"), object[data]); //for replace all occurance
      //str = str.replace(msg, object[data])
    }
    return str;
  }
  return "";
};

const capitalizeFirstLetter = (string) => {
  string = string.trim().toLowerCase().replace(/\s+/g, "");
  return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};
const capitalizeFirstLetterUsingRegex = (string) => {
  string = string
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s+/g, " ");
  return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

// const generateAuthToken = async (user) => {
//   const token = jwt.sign(
//     {
//       id: user.id,
//       email: user.email,
//     },
//     process.env.JWT_SECRET
//   );
//   return token;
// };

module.exports = {
  sendResponse,
  responseIn,
  sendResponseValidation,
  replaceStringWithObjectData,
  isEmptyObject,
  capitalizeFirstLetter,
  capitalizeFirstLetterUsingRegex,
  //   generateAuthToken,
};
