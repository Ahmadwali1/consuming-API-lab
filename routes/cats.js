var express = require('express');
var router = express.Router();
const catsCtrl = require('../controllers/catfacts')

router.get("/fact", catsCtrl.getFact)



module.exports = router