var Daycare = require('../models/Daycare');

module.exports = {

  // create: function (req, res) {
  //   var newDaycare = new Daycare(req.body);
  //   newDaycare.save(function (err, result) {
  //     if (err) return res.status(500).send(err);
  //     else res.send(result);
  //   });
  // },

  read: function (req, res) {
    Daycare.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    Daycare.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }

  // delete: function (req, res) {
  //   Daycare.findByIdAndRemove(req.params.id, function (err, result) {
  //     if (err) return res.status(500).send(err);
  //     else res.send(result);
  //   });
  // }
};
