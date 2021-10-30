const loginController = require("../controller/loginController");
const userService = require("../services/user");
module.exports = async (app) => {
  //Sets view route for our login page
  app.post("/login", async (req, res) => {
    try {
      let userLogin = req.body;
      let resultToken = await loginController.login(userLogin);
      if (resultToken) {
        console.log("Arregando errores del token", resultToken);
        return res.send({ data: resultToken });
      }
      res.status(402).send("Unregistered user");
    } catch (err) {
      console.log("error el usuario no ha sido autenticado");
      res.status(402).send("Unregistered user");
    }
  });

  app.get("/changePass", (req, res) => {
    res.render("changePass.ejs");
  });
  //Crear usuario
  // app.post("/changePassTi", async (req, res) => {
  //   let user = req.body;
  //   // console.log(user.paswordChange);
  //   // res.json("Hola")
  //   let token = await loginController.updatePass(user);
  //   console.log(token);
  // });
};
