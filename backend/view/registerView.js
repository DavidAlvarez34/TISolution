const registerController=require('../controller/registerController');
module.exports = async (app) => {
  app.get("/register", (req, res) => {
    res.render("register.ejs");
  });

  function forwardAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }
  app.post("/register",async (req, res) => {
    //const { userName, email, password } = req.body;
    const data=req.body
    if((data.myEmail =="" || data.myEmail==undefined) || (data.myPassword=="" && data.myPassword==undefined) ){
        res.redirect("register.ejs");
    }
    console.log(data.myEmail);
    await registerController.register(data);
    
    // console.log(username,email,password);
    // const user = new User({
    //   userName,
    //   email,
    //   password,
    // });
    // //utilizarlo desde su instancia del modelo
    // user.password = await user.encryptPassword(user.password);
    // console.log(user);
    // await user.save(); //guarada en la base de datos
    // //que se autentiquite cada 24 horas
    // const token = jwt.sign({ id: user._id }, config.secret, {
    //   //guardar el id del usuario que se envia
    //   expiresIn: 60 * 60 * 24,
    // });
    res.render("register.ejs");
  });
};
