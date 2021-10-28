const butgetsController = require("../controller/butgetsController");
module.exports = async (app) => {
  app.get("/ti", async (req, res) => {
    let result = await butgetsController.showwBitgets();
    console.log(result);
    res.render("ti.ejs", {
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
