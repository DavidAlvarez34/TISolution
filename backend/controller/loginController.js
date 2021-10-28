const jwt = require("jsonwebtoken");
const loginModel = require("../model/loginModel");
require("dotenv").config();

module.exports.login = async (user) => {
  let login = new loginModel();
  let data = await login.findUser(user);
  if (data) {
    let token = jwt.sign({ data }, process.env.SECRET_KEY); // se agrega el usiario en corchetes para hacerlo como objeto
    return token;
  } else {
    return "User no autenticado";
  }
};
module.exports.updatePass = async (user) => {
  let response = new loginModel();
  let result = await response.update(user);
  console.log(result);
  return result;
};
