var mongoose = require('mongoose');

var CollectionSchema = mongoose.Schema({
    'collection_id': {
        type: Number,
        required: true
      },
    'res_count': {
        type: Number,
        required: true
      },
    'image_url': {
        type: String,
        required: true
      },
    'url': {
        type: String,
        required: true
      },
    'title': {
        type: String,
        required: true
      },
    'description': {
        type: String,
        required: true
      },
    'share_url': {
        type: String,
        required: true
      }

  });

var Collection = module.exports = mongoose.model('Collection', CollectionSchema);
