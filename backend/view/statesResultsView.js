
const statesResultsController= require('../controller/statesResultsController')
module.exports = async (app) => {
    app.get('/newButgets', async(req, res) => {
       
        let result = await statesResultsController.showStatedResult();
        console.log(result);
       
        res.render('../views/viewsPartials/newButgets.ejs',{
            data:result
        })
         return result;
        });

    app.get('/deleteStated/:id', async(req, res) => {
        const hola=req.params;
        console.log("Eliminar",hola);
        let result = await statesResultsController.deleteStated(hola.id);
       
        res.redirect('/newButgets');
         
        // })
        
    })
    app.post('/updateStated', async(req, res) => {
        const hola=req.body;
        console.log("Actualizar",hola);
        let result = await statesResultsController.updatestatedsCont(hola);
        
        res.redirect('/newButgets');
    })
    app.post('/createStated', async(req, res) => {
        const hola=req.body;
        console.log("Crear algo",hola);
        let result = await statesResultsController.createStated(hola);
        
        res.redirect('/ti');
    })
    
}