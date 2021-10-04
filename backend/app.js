const express = require('express');
const cors = require('cors');
const sequileze=require('./db/connection')
const loginView = require('./view/loginView');
require('dotenv').config();
const app =express();//instanciar express
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
const serverStart= async()=>{
    try {
       await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT,()=>{
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
    }
}
serverStart();
loginView(app);