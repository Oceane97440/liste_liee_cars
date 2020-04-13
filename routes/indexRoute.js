const router = require("express").Router();

let indexController = require("../controllers/indexController");

router.get('/', indexController.index);
//router.get('/idmodel', indexController.modeles);
router.get('/:idmarque/model/', indexController.modeles);
//recup les donnée pour afficher la card
router.get('/:idmarque/:idmodel/model/', indexController.info);







module.exports = router;