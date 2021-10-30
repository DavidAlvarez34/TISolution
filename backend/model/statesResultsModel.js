const sequelize = require("../db/connection");
module.exports = class statedResultModel {
  constructor(theUser, login) {
    this.theUser = theUser;
    this.login = login;
  }
  async create(theUser) {
    let result = await sequelize.query(
      "INSERT INTO statesResults (sales,costs,margin,FinalBalnce) VALUES (" +
        theUser.dateCreated +
        "," +
        theUser.proyectName +
        "," +
        theUser.versionCreate +
        "," +
        theUser.finalBalanceFinal +
        ")"
    );

    return result;
  }
  async list() {
    let result = await sequelize.query("SELECT * FROM statesResults");
    return result[0];
  }
  async delete(loginId) {
    let result = await sequelize.query(
      "DELETE FROM statesResults WHERE idEstRes = " + loginId
    );
    return result;
  }
  async update(updateButget) {
    let result = await sequelize.query(
      "UPDATE statesResults SET sales = " +
        updateButget.mydate +
        ", costs =" +
        updateButget.butgetsProyect +
        ", margin =" +
        updateButget.versionsBut +
        ", FinalBalnce=" +
        updateButget.finalBalnce +
        " WHERE idEstRes = " +
        updateButget.idStatedRes +
        ";"
    );
    return result;
  }
};
