var mongoose = require('mongoose');

var welcomeSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Welcome', welcomeSchema);
