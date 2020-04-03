const indexController = {};
//const fs = require("fs");
const request = require('request');


indexController.index = (req, res) => { // GET : /

    let urlmarque = `https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2018`;

    request(urlmarque, {async: true},(err, data) => {

        console.log(urlmarque);      

        //converti les donnée js en obj js
      makes=JSON.parse(data.body)
        //compte longeur du tableau
       console.log(makes.Makes.lenght);
    
   
        res.render('cars',{data:makes.Makes});
        console.log(makes);
    })





};



indexController.modeles = (req, res) => {
    let idmarque=req.params.idmarque

    let urlmodel=`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${idmarque}`;
    
        request(urlmodel, {async: true},(err, data) => {
            console.log(urlmodel);      
    
            modelid=JSON.parse(data.body)
            
          // console.log(model.Models.lenght);
        
           res.send(modelid);

            // res.render('cars',{data:model.Models});
           console.log(modelid);
        })
        
        
        
        

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