var mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
uniqueID: String,
name: String,
price: String,
description: String,
image:String,
Department: String

});

module.exports = mongoose.model('cart', CartSchema);
