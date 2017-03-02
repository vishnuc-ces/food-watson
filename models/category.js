var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    'name' : {
        type : String,
        required : true
    }
});

var User = module.exports = mongoose.model('Category', UserSchema);