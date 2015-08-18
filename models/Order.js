var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  orderNum: {
    type: Number,
    unique: true,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
