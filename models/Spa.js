var mongoose = require('mongoose');

var spaSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('Spa', spaSchema);
