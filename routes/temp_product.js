var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {

  product.find({}).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
    	var temp=products[0].product[0]
    // return temp;
    res.send(temp);
    }
  });
});

router.get('/:category', function(req, res, next) {
	var category=req.params.category;
  product.find({}).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
    	var temp=products[0].product[0][category];
    // return temp;
    res.send(temp);
    }
  });
});

router.get('/:category/:uid', function(req, res, next) {
	var category=req.params.category;
	var uid=req.params.uid;
  product.find({}).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
    	var temp=products[0].product[0][category].filter(function (temp) {
  			return temp.uniqueId === uid;
});
    // return temp;
    res.send(temp);
    }
  });
});

module.exports = router;
