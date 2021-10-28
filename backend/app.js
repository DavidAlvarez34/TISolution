const express = require("express");
const cors = require("cors");

const path = require("path");
const sequileze = require("./db/connection");
const loginView = require("./view/loginView");
const registerView = require("./view/registerView");
const butsgetsView = require("./view/butgetsView");
const butsgetsNewView = require("./view/newButgetsView");
const statesResultsView = require("./view/statesResultsView");
const cashFlowView = require("./view/cashFlowView");
const newCashView = require("./view/newCashView");
require("dotenv").config();
const app = express(); //instanciar express
//Initializar passport  es un middleware de autenticación

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

//app.set('views',path.join(__dirname,'views'));//une las vistas

const serverStart = async () => {
  try {
    await sequileze.authenticate();
    console.log("Conexión estabilizada correctamente");
    app.listen(process.env.PORT, () => {
      console.log(
        `Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error(
      "No se pudo conectar correctamente con la Base de datos:",
      error
    );
  }
};
serverStart();
loginView(app);
registerView(app);
butsgetsView(app);
butsgetsNewView(app);
statesResultsView(app);
cashFlowView(app);
newCashView(app);
