var express = require('express');
var mongoose = require("mongoose");
var Promise = require('promise');
var router = express.Router();
var product = require('../models/product');
var temp;
/* GET home page. */
router.use( function(req, res, next) {
  product.find({}).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
    	res.locals.temp=products[0].product[0];
    	next()
    }
  })
});

router.get('/:category', function(req, res, next) {
	var category=req.params.category;
    res.send(res.locals.temp[category]);
    });

router.get('/:category/:uid', function(req, res, next) {
	var category=req.params.category;
	var uid=req.params.uid;
    	var result=res.locals.temp[category].filter(function (temp) {
  			return temp.uniqueId === uid;
  		});
    res.send(result);
});



module.exports = router;
