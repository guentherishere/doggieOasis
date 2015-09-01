var mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
