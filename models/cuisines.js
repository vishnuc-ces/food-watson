var mongoose = require('mongoose');

var CuisineSchema = mongoose.Schema({
    'cuisine_id': {
        type: Number,
        required: true
      },
    'cuisine_name': {
        type: String,
        required: true
      }
  });

var Cuisine = module.exports = mongoose.model('Cuisines', CuisineSchema);
