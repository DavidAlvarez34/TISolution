const sequelize = require('../db/connection');
module.exports = class statedResultModel {
    constructor(theUser,login){
        this.theUser = theUser;
        this.login = login;
    }
    async create (theUser){
        let result = await sequelize.query("INSERT INTO statesResults (sales,costs,margin) VALUES (" + theUser.date + "," + theUser.proyect + "," + theUser.versions +");");
        console.log(result);
        return result;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM statesResults");
        return result[0];
    }
    async delete (loginId){
        let result = await sequelize.query("DELETE FROM statesResults WHERE idEstRes = " + loginId);
        return result;
    }
    async update (updateButget){
        let result = await sequelize.query("UPDATE statesResults SET sales = "+ updateButget.dateButget+", costs ="+ updateButget.proyectButgets+", margin ="+updateButget.versions+"" +" WHERE idEstRes = " + updateButget.idBudget + ";");
        return result;
        
    }
}