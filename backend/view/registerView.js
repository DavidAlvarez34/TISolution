const registerController = require("../controller/registerController");
module.exports = async (app) => {
  app.post("/registerUser", async (req, res) => {
    const data = req.body;
    await registerController.register(data);
  });
};
