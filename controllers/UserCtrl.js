var User = require('../models/User');

module.exports = {

  create: function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function (req, res) {
    User.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
