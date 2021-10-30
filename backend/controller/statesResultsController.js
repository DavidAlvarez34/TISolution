const statesResultsModel = require("../model/statesResultsModel");
require("dotenv").config();

module.exports.showStatedResult = async () => {
  let showsStaRes = new statesResultsModel();
  let data = await showsStaRes.list();

  return data;
  // if (data) {
  //     let token = jwt.sign({data},process.env.SECRETKEY);
  //     return token;
  // } else {
  //     return "Usuario no autenticado.";
  // }
};
module.exports.deleteStated = async (user) => {
  let response = new statesResultsModel();
  let result = await response.delete(user);
  console.log(result);
  return result;
};

module.exports.updatestatedsCont = async (user) => {
  let response = new statesResultsModel();
  let result = await response.update(user);
  console.log(result);
  return result;
};

module.exports.createStated = async (user) => {
  let response = new statesResultsModel();
  let result = await response.create(user);
  console.log(result);
  return result;
};
