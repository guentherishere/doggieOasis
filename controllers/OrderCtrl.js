var Order = require('../models/Order');

module.exports = {

  create: function(req, res) {
    var newOrder = new Order(req.body);
    newOrder.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Order.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Order.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
