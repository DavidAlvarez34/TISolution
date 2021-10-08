const loginController = require('../controller/loginController');
const midd = require('../middlewares/user')
const userService = require('../services/user')
module.exports = async (app) => {
    app.get('/', (req, res) => {
        res.render('index.ejs'/*, { name: req.user.name }*/)
    })
    
    //Sets view route for our login page
    app.get('/login', (req, res) => {
        res.render('login.ejs')
    });
    app.get('/exit', (req, res) => {
        res.render('index.ejs')
    });

    app.get('/changePass', (req, res) => {
        res.render('changePass.ejs')
    });
    //Crear usuario
    app.post('/login',async(req,res) => {
        let user = req.body;
        let date={
            myName:'Juan'
        }
        let token = await loginController.login(user);
        let thisToken = await userService.tokenGeneration(user.user)
        if(token){
            res.redirect('/ti');
           
        }
        // if(token){
        //     return res.status(201).json({
        //         auth: true,
        //         mensaje:'User exits'
        //     });
        // }else{
        //     return res.status(402).json({
        //         auth:false,
        //         message:'No token provided'
        //     });
        // }
    });
    app.post('/changePassTi',async(req,res) => {
        let user = req.body;
        // console.log(user.paswordChange);
        // res.json("Hola")
        let token = await loginController.updatePass(user);
        console.log(token);
        
        // if(token){
        //     return res.status(201).json({
        //         auth: true,
        //         mensaje:'User exits'
        //     });
        // }else{
        //     return res.status(402).json({
        //         auth:false,
        //         message:'No token provided'
        //     });
        // }
     });


    
}


// module.exports = async (app) => {
//     //Crear usuario
//     app.post('/login',async(req,res) => {
//         let user = req.body;
//         let token = await loginController.login(user);
//         if(token){
//             return res.status(201).json({
//                 auth: true,
//                 mensaje:'User exits'
//             });
//         }else{
//             return res.status(402).json({
//                 auth:false,
//                 message:'No token provided'
//             });
//         }
//     });
//     app.post('/changePassTi',async(req,res) => {
//         let user = req.body;
//         // console.log(user.paswordChange);
//         // res.json("Hola")
//         let token = await loginController.updatePass(user);
//         console.log(token);
//         if(token){
//             return res.status(201).json({
//                 auth: true,
//                 mensaje:'User exits'
//             });
//         }else{
//             return res.status(402).json({
//                 auth:false,
//                 message:'No token provided'
//             });
//         }
//      });


    
// }