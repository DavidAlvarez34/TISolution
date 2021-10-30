const butgetsController = require("../controller/butgetsController");
const autenticationUser = require("../midd/autentication");
module.exports = async (app) => {
  app.post("/ti", autenticationUser.userAutentication, async (req, res) => {
    try {
      let result = await butgetsController.showwBitgets();
      //console.log(result);
      res.send({
        showButgets: result,
      });
      return result;
    } catch (error) {
      res.status(402).send("Error dates");
    }
  });

  app.post("/updateButgets", async (req, res) => {
    try {
      const hola = req.body;
      //console.log("Update presupuestos", hola);
      let result = await butgetsController.updateButgets(hola);
    } catch (error) {
      res.status(402).send("error presupuestos no actulizados");
    }
    res.redirect("/ti");
  });
  app.get("/delete/:id", async (req, res) => {
    try {
      const hola = req.params;
      console.log("Eliminar ------------------", hola);
      let result = await butgetsController.deleteButgets(hola.id);
      res.send({ message: result });
    } catch (error) {
      res.status(402).send("error presupuestos no actulizados");
    }
    //res.redirect("/ti");
  });
  app.post("/createButgets", async (req, res) => {
    try {
      const hola = req.body;
      console.log("Eliminar", hola);
      let result = await butgetsController.createButgets(hola);
      res.send({ message: result });
    } catch (error) {
      res.status(402).send("error presupuestos no actulizados");
    }
  });
};
