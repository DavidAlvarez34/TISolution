const loginController = require('../controller/loginController');

module.exports = async (app) => {
    //Crear usuario
    app.post('/login',async(req,res) => {
        let user = req.body;
        let token = await loginController.login(user);
        if(token){
            return res.status(201).json({
                auth: true,
                mensaje:'User exits'
            });
        }else{
            return res.status(402).json({
                auth:false,
                message:'No token provided'
            });
        }
    });
    app.post('/changePassTi',async(req,res) => {
        let user = req.body;
        // console.log(user.paswordChange);
        // res.json("Hola")
        let token = await loginController.updatePass(user);
        console.log(token);
        if(token){
            return res.status(201).json({
                auth: true,
                mensaje:'User exits'
            });
        }else{
            return res.status(402).json({
                auth:false,
                message:'No token provided'
            });
        }
     });


    
}