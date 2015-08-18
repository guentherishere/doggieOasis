var DaycareRates = require('../models/DaycareRates');

module.exports = {

  create: function (req, res) {
    var newDaycareRates = new DaycareRates(req.body);
    newDaycareRates.save(function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function (req, res) {
    DaycareRates.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    DaycareRates.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    DaycareRates.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
