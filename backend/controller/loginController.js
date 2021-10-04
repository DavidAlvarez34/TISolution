const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel');
require('dotenv').config();


module.exports.login = async (user) => {
    let login = new loginModel();
    let data = await login.findToken(user);
    
    return data
    // if (data) {
    //     let token = jwt.sign({data},process.env.SECRETKEY);
    //     return token;
    // } else {
    //     return "Usuario no autenticado.";
    // }
}
module.exports.updatePass = async (user) => {
    let response = new loginModel();
    let result = await response.update(user);
    console.log(result);
    return result;
}