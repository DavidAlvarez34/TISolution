const sequelize = require('../db/connection');
module.exports = class loginModel {
    constructor(theUser,login){
        this.theUser = theUser;
        this.login = login;
    }
    async create (theUser){
        try {
            let result = await sequelize.query("INSERT INTO userTiBudget (emailUser,userPassword ) VALUES ('" + theUser.myEmail + "','" + theUser.myPassword + "');");
        console.log(result);
        return result ;
        } catch (error) {
            return "error usuario ya registrado o te falto campos"
        }
        
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM usuario");
        return result[0];
    }
    async find (loginId){
        let result = await sequelize.query("SELECT * FROM usuario WHERE idUsuario = " + loginId);
        return result[0][0];
    }

    async update (updateAPassword){
        console.log(updateAPassword.paswordChange);
        let result = await sequelize.query("UPDATE userTiBudget SET userPassword = '" + updateAPassword.paswordChange+"'"+ " WHERE emailUser = '" + updateAPassword.email + "' AND userPassword = '"+ updateAPassword.paswordCurrent + "'");
        console.log(result);
        return result;
    }
    async delete (loginId){
        let result = await sequelize.query("DELETE FROM usuario WHERE idUsuario = " + loginId);
        return result;
    }

    async findToken (user){
        let result = await sequelize.query("SELECT emailUser FROM userTiBudget WHERE emailUser = '" + user.email + "' AND userPassword = '" + user.userPasword + "'");
        console.log(result);
        if (result[0].length > 0) {
          return true
        }else{
            return false
        }
        return result
        // if (result[0].length > 0) {
        //     if (user.email == result[0][0].email) {
        //         return result[0][0];
        //     } else {
        //         return false;
        //     }
        // } else {
        //     return false;
        // }
    }
}