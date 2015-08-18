var Spa = require('../models/Spa');

module.exports = {

  create: function (req, res) {
    var newSpa = new Spa(req.body);
    newSpa.save(function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function (req, res) {
    Spa.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    Spa.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    Spa.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
