var mongoose = require('mongoose');

var CuisineSchema = mongoose.Schema({
    'name' : {
        type : String,
        required : true
    }
});

var User = module.exports = mongoose.model('Cuisines', UserSchema);