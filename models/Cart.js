var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
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
  },
  image: {
    type: String,
    required: true
  }
  // ,
  // user: {type: Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Cart', cartSchema);
