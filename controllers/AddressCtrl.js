var Address = require('../models/Address');

module.exports = {

  create: function(req, res) {
    var newAddress = new Address(req.body);
    newAddress.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Address.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function(req, res) {
    Address.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Address.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
