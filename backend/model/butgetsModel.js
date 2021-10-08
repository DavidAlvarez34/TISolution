const sequelize = require('../db/connection');
module.exports = class butgetsModel {
    constructor(theUser,login){
        this.theUser = theUser;
        this.login = login;
    }
    async create (theUser){
        let result = await sequelize.query("INSERT INTO budgets (CreationDate,project,versions) VALUES ('" + theUser.date + "','" + theUser.proyect + "','" + theUser.versions +"');");
        console.log(result);
        return result;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM budgets");
        return result[0];
    }
    async delete (loginId){
        let result = await sequelize.query("DELETE FROM budgets WHERE idBudget = " + loginId);
        return result;
    }
    async update (updateButget){
        let result = await sequelize.query("UPDATE budgets SET CreationDate = '"+ updateButget.dateButget+"', project ='"+ updateButget.proyectButgets+"', versions ='"+updateButget.versions+"'" +" WHERE idBudget = " + updateButget.idBudget + ";");
        return result;
        
    }
}