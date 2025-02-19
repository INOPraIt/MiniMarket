const mongoose = require('mongoose');

module.exports = mongoose.model("Products", new mongoose.Schema({
  named: { type: String, required: true },
  color: {type: String, required: true},
  description: { type: String },
  material: {type: String},
  price: {type: String},
  threadDiameter: {type: String},
  typeOfEyeliner: {type: String},
  viewOfTheSpout: {type: String},
  image: { type: String}
}));
