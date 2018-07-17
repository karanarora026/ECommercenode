var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Promise = require('promise');
var cart = require('../models/cart');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // .find() finds all instances in the database that match the query you pass in.
  // It returns an array, even if there is only one item in the array.
  
  // No query passed in means "find everything"
  cart.find((err, cart) => {  
  
      if (err) return res.status(500).send(err)
     
      return res.send(cart);
  });
});
router.get('/count', function(req, res, next) {
  cart.countDocuments('',(err, cart) => {  
    console.log("hi")
      if (err) return res.send(500).send(err)
      res.send(cart.toString());
  });
});
router.post('/save', function(req, res, next) {
  console.log("Body:", req.body);
  const product = new  cart(req.body);  

product.save(err => {
  if (err) return res.status(500).send(err);  
     res.status(200).send(true);
});
});
router.delete('/delete/:id',function(req,res,next){
  console.log("id is " + req.params.id);
  cart.findByIdAndRemove(req.params.id, (err, todo) => {  
    if (err) return res.status(500).send(err);
    const response = {
        message: "Todo successfully deleted",
        id: todo._id
    };
    return res.status(200).send(true);
});

})

module.exports = router;