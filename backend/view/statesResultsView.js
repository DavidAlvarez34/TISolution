const statesResultsController = require("../controller/statesResultsController");
module.exports = async (app) => {
  app.post("/newButgets", async (req, res) => {
    try {
      let result = await statesResultsController.showStatedResult();
      //console.log("Ruta de estados de resultados: ", result);

      res.send({ viewStatedRes: result });
    } catch (error) {
      res.status(402).send("Error dates");
    }
  });

  app.get("/deleteStated/:id", async (req, res) => {
    try {
      const hola = req.params;
      console.log("Eliminar stado -------", hola);
      let result = await statesResultsController.deleteStated(hola.id);
      res.send({ message: result });
      return result;
    } catch (error) {}
  });
  app.post("/updateStated", async (req, res) => {
    try {
      const hola = req.body;
      console.log("Actualizar Estado ------------", hola);
      let result = await statesResultsController.updatestatedsCont(hola);
      res.send({ message: result });
    } catch (error) {
      res.status(402).send("Error al eliminar");
    }
  });
  app.post("/createStated", async (req, res) => {
    try {
      const hola = req.body;
      //console.log("Crear un estado de resultados", hola);
      let result = await statesResultsController.createStated(hola);
      res.send({ message: hola });
      return hola;
    } catch (error) {
      res.status(402).send("error presupuestos no actulizados");
    }

    //res.redirect("/ti");
  });
};
