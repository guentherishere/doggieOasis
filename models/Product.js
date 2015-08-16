var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

//'Product' below is where you name the collection; the name gets lowercased and pluralized 
module.exports = mongoose.model('Product', productSchema);
