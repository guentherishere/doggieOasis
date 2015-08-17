var mongoose = require('mongoose');

var daycareRatesSchema = new mongoose.Schema({
    days: {
        type: Number,
        required: true
    },
    fullOneDog: {
        type: Number,
        required: true
    },
    fullTwoDogs: {
        type: Number,
        required: true
    },
    halfOneDog: {
        type: Number,
        required: true
    },
    halfTwoDogs: {
        type: Number,
        required: true
    },
    additional: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('DaycareRates', daycareRatesSchema);
