var express = require('express');
var mongoose = require("mongoose");
var Promise = require('promise');
var router = express.Router();
var item = require('../models/item');
var temp;
/* GET home page. */

router.get('/:category', function (req, res, next) {
    var category = req.params.category;
    console.log(category);
    item.find({ "category": category }).exec(function (err, products) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.send(products);
        }
    })
});

router.get('/:category/:uid', function (req, res, next) {
    var category = req.params.category;
    var uid = req.params.uid;
    item.findOne({ "_id": uid }).exec(function (err, products) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.send(products);
        }
    })
});



module.exports = router;
