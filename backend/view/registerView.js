const registerController = require("../controller/registerController");
module.exports = async (app) => {
  app.post("/register", async (req, res) => {
    //const { userName, email, password } = req.body;
    const data = req.body;
    if (
      data.myEmail == "" ||
      data.myEmail == undefined ||
      (data.myPassword == "" && data.myPassword == undefined)
    ) {
      res.redirect("register.ejs");
    }
    console.log(data.myEmail);
    await registerController.register(data);
  });
};
