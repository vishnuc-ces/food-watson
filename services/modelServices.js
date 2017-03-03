var server = require('./../server');
var Session = require('./../models/session')
var q = require('q')

var findQuery = function(model, data, cb){
	model.find({'presenter': data}, function(error, response){
		if (error){
			cb(null, error)
		}
		cb(null, response)
	});

	
}

var createNew = function(model, cb){
	model.save(function(err, response) {
	    if (err){
	    	console.log("error",err);
	    }
	    cb(null, response)	
	});
	
}

var findById = function(model, data, cb){
	
	model.findById({'_id': data}, function(error, response) {
		  if(error){
		  	cb(error)
		  }
		  cb(null, response)
		  
	});
}

var findOneQuery = function(model, cb){
	
}


module.exports = {
	findquery : findQuery,
	findbyId : findById,
	createnew : createNew,
	findonequery: findOneQuery
}
