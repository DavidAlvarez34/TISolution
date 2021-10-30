const jwt = require("jsonwebtoken");
const registerModel = require("../model/registerModel");
require("dotenv").config();

module.exports.register = async (userRegister) => {
  let creates = new registerModel();
  let data = await creates.create(userRegister);
  return data;
  // if (data) {
  //     let token = jwt.sign({data},process.env.SECRETKEY);
  //     return token;
  // } else {
  //     return "Usuario no autenticado.";
  // }
};
// module.exports.updatePass = async (user) => {
//     let response = new registerModel();
//     let result = await response.update(user);
//     console.log(result);
//     return result;
// }
