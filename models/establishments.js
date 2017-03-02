var mongoose = require('mongoose');

var EstablishmentSchema = mongoose.Schema({
    'name' : {
        type : String,
        required : true
    },
    'establishmentId' : {
        type : Number,
        required : true
    }
});

var Establishment = module.exports = mongoose.model('Establishment', EstablishmentSchema);