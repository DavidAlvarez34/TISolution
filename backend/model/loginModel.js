const sequelize = require("../db/connection");
module.exports = class loginModel {
  constructor(theUser, login) {
    this.theUser = theUser;
    this.login = login;
  }
  async create(theUser) {
    let result = await sequelize.query(
      "INSERT INTO usuario (nombre,apellido,email,userPasword) VALUES ('" +
        theUser.myName +
        "','" +
        theUser.lastName +
        "','" +
        theUser.email +
        "','" +
        theUser.itemPassword +
        "');"
    );
    console.log(result);
    return result;
  }
  async list() {
    let result = await sequelize.query("SELECT * FROM usuario");
    return result[0];
  }
  async findUser(login) {
    let user = [login.emailUserTi, login.passwordUserTi];
    console.log("Hola desde model: ", login);
    let result = await sequelize.query(
      "SELECT emailUser FROM userTiBudget WHERE emailUser = '" +
        user[0] +
        "' AND userPassword = '" +
        user[1] +
        "'"
    );
    console.log(result);
    if (result[1] === 1) {
      return true;
    } else {
      return false;
    }
  }

  async update(updateAPassword) {
    let result = await sequelize.query(
      "UPDATE userTiBudget SET userPassword = '" +
        updateAPassword.typePasswordUpdate +
        "'" +
        " WHERE emailUser = '" +
        updateAPassword.typeEmailX +
        "' AND userPassword = '" +
        updateAPassword.typePasswordX +
        "'"
    );

    return result;
  }
  async delete(loginId) {
    let result = await sequelize.query(
      "DELETE FROM usuario WHERE idUsuario = " + loginId
    );
    return result;
  }

  async find(user) {
    let result = await sequelize.query(
      "SELECT emailUser FROM userTiBudget WHERE emailUser = '" +
        user.emailLogin +
        "' AND userPassword = '" +
        user.emailpass +
        "'"
    );
    console.log(result);
    if (result[0].length > 0) {
      return true;
    } else {
      return false;
    }
  }
};
