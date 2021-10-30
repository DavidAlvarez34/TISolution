const butgetsModel = require("../model/butgetsModel");
require("dotenv").config();

module.exports.showwBitgets = async () => {
  let showsBugets = new butgetsModel();
  let data = await showsBugets.list();
  return data;
  // if (data) {
  //     let token = jwt.sign({data},process.env.SECRETKEY);
  //     return token;
  // } else {
  //     return "Usuario no autenticado.";
  // }
};
module.exports.deleteButgets = async (user) => {
  let response = new butgetsModel();
  let result = await response.delete(user);
  console.log(result);
  return result;
};

module.exports.updateButgets = async (user) => {
  let response = new butgetsModel();
  let result = await response.update(user);
  console.log(result);
  return result;
};

module.exports.createButgets = async (user) => {
  let response = new butgetsModel();
  let result = await response.create(user);
  console.log(result);
  return result;
};
