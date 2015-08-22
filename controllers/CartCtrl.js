var Cart = require('../models/Cart');

module.exports = {

  create: function (req, res) {
    var newCart = new Cart(req.body);
    newCart.save(function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function (req, res) {
    Cart.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    Cart.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    Cart.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
