const indexController = {};
const https = require('https');


indexController.index = (req, res) => { // GET : /


  https.get('https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2019', function (result) {


    let data = '';

    result.on('data', function (chunk) {
      data += chunk;
    })

    result.on('end', () => {
      let makes = JSON.parse(data).Makes

      res.render('cars', {
        makes: makes
      });


      console.log(makes);



    })


  }).on("error", (err) => {
    console.log("Error: " + err)
  });
};

indexController.modeles = (req, res) => {
    let idmarque = req.params.idmarque

    https.get(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${idmarque}`, function (result) {//GET :/idmarque/model

      console.log(idmarque);

      let data = '';

      result.on('data', function (chunk) {
        data += chunk;
      })

      result.on('end', () => {
        let makes = JSON.parse(data)
        res.json({
          makes: makes
        });
        console.log(makes);
      })









    }).on("error", (err) => {
      console.log("Error: " + err)
    })





  },





  
  indexController.info = (req, res) => {// GET:model/:idmarque/:idmodel

    let idmarque = req.params.idmarque;
    let idmodel = req.params.idmodel;

    https.get(`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${idmarque}&model=${idmodel}`, function (result) {

    console.log(idmarque);
    console.log(idmodel)


    let data = '';
    
    result.on('data', function(chunk) {
      data += chunk;
    })

    result.on('end', () => {
      let info = JSON.parse(data)
      res.send({ info });

      console.log(info);




    })


  }).on("error", (err) => {
      console.log("Error: " + err)
    })

  }
module.exports = indexController;