const router = require("express").Router();

let indexController = require("../controllers/indexController");

router.get('/', indexController.index);
router.get('/:idmodel', indexController.modeles);
//recup les donnée pour afficher la card
router.get('/model/:idmarque/:idmodel', indexController.info);







module.exports = router;