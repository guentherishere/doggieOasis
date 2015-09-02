var Product = require('../models/Product');

module.exports = {

  create: function (req, res) {
    var newProduct = new Product(req.body);
    newProduct.save(function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function (req, res) {
    Product.find(req.query)
      // .populate('Rating')
      .exec(function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }
        console.log("this is in the product ctrl", result); {
          res.send(result);
        }
      });
  },

  update: function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
