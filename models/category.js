var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    'name' : {
        type : String,
        required : true
    },
    'zomatoId' : {
        type : Number,
        required : true
    }
});

var Category = module.exports = mongoose.model('Category', CategorySchema);