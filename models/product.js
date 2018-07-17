var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
uniqueID: String,
  product: []
});

module.exports = mongoose.model('product', ProductSchema);
