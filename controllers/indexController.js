const indexController = {};
//const fs = require("fs");
const request = require('request');


indexController.index = (req, res) => { // GET : /

    let urlmarque = `https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2018`;

    request(urlmarque, {async: true

    },(err, data) => {
        console.log(url);      

      makes=JSON.parse(data.body)
        
       console.log(makes.Makes.lenght);
    
   
        res.render('cars',{data:makes.Makes});
        console.log(makes);
    })





};



indexController.modeles = (req, res) => {

    let urlmodel='https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=chrysler'
        //console.log(req.params.idmodel)

        // fs.readFile("cars.json", (err, file) => {
        //     if (err) throw err;
        //     let data = JSON.parse(file);
        //     //  console.log(data.cars[req.params.idmodel]);
        //     //je veux l'ensemble des donnée puis dans modele [id modèle]
        //     var modelid = data.cars[req.params.idmodel];
        //     res.send(modelid);
        // });


    },





    /// GET:model/:idmarque/:idmodel
    // indexController.info = (req, res) => {
    //     fs.readFile("cars.json", (err, file) => {
    //         if (err) throw err;
    //         //recup l'ensemble des donnée du json
    //         let data = JSON.parse(file);
    //         //recup l'ensemble des donnée (cars) puis dans le tableau [je veux id marque] les modèle puis dans le tableau[je veux idmodèle]
    //         var info = data.cars[req.params.idmarque].modeles[req.params.idmodel];


    //         res.send(info);
    //     });
    // };


module.exports = indexController;