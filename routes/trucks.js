const express = require("express");
const router  = express.Router();
// var Truck = require("../models/truck");
// var middleware = require("../middleware");
// var NodeGeocoder = require('node-geocoder');
 
// var options = {
//   provider: 'google',
//   httpAdapter: 'https',
//   apiKey: process.env.GEOCODER_API_KEY,
//   formatter: null
// };
 
// var geocoder = NodeGeocoder(options);

//import controller
const { readAll, readOne, newTruck, update } = require('../controllers/trucks');
const {requireSignin} = require('../controllers/auth');

router.get('/home-page', readAll);
router.get('/truckinfo/:id', readOne);
// router.post('/truck', requireSignin, newTruck);
router.post('/addtruck', requireSignin, newTruck);
// router.put('/truck/update/:id', requireSignin, update);
router.put('/truck/update/:id',  update);




module.exports = router;