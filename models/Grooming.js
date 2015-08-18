var mongoose = require('mongoose');

var groomingSchema = new mongoose.Schema({
  monday: {
    type: String,
    required: true
  },
  tuesday: {
    type: String,
    required: true
  },
  wednesday: {
    type: String,
    required: true
  },
  thursday: {
    type: String,
    required: true
  },
  friday: {
    type: String,
    required: true
  },
  saturday: {
    type: String,
    required: true
  },
  sunday: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Grooming', groomingSchema);
