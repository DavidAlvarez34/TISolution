const userDB = require('../model/loginModel')
const jwt = require('jsonwebtoken')

module.exports.tokenGeneration = async (data) => {
    const result = jwt.sign({ data }, process.env.SECRET_KEY);
    console.log(result);
    return result
}
module.exports.userVerify = async (token) => {
    const result = jwt.verify(token, process.env.SECRET_KEY)
    if (result) {
        return result
    } else {
        throw new Error('Invalid Token')
    }
}