var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    uniqueID: String,
    name: String,
    price: String,
    description: String,
    image:String,
    category: String
    
});

module.exports = mongoose.model('item', ItemSchema);
