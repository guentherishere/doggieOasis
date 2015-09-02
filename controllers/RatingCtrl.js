var Rating = require('../models/Rating');
var Product = require('../models/Product');
var mongoose = require('mongoose');

module.exports = {

  create: function (req, res) {
    var newRating = new Rating(req.body);
    (function(){
      newRating.save(function (err, savedRating, affected) {
        if (err) return savedRating;
        var newID = savedRating._id;
        Product.findByIdAndUpdate(req.body.product, { $push: { "rating" : newID} }, function (err, result) {
          if (err) res.send(err);
          else {
            res.send(result);
          }
        });
        res.send(res);
      });
    })();
  },

  read: function (req, res) {
    Rating.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    Rating.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function (req, res) {
    Rating.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
};
