const newCashFlow = require("../controller/newCashFlow");
module.exports = async (app) => {
  app.get("/newCastV", async (req, res) => {
    //No se puede obtner la misma ruta

    let result = await newCashFlow.newCashResult();
    console.log(result);

    res.render("../views/viewsPartials/newcashFlow.ejs", {
      data: result,
    });
    return result;
  });

  app.get("/delete/:id", async (req, res) => {
    const hola = req.params;
    console.log("Eliminar", hola);
    let result = await butgetsController.deleteButgets(hola.id);

    res.redirect("/ti");

    // })
  });
  app.post("/updateButgets", async (req, res) => {
    const hola = req.body;
    console.log("Eliminar", hola);
    let result = await butgetsController.updateButgets(hola);

    res.redirect("/ti");
  });
  app.post("/createButgets", async (req, res) => {
    const hola = req.body;
    console.log("Eliminar", hola);
    let result = await butgetsController.createButgets(hola);

    res.redirect("/ti");
  });
};
