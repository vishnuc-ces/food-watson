'use strict'

module.exports = function(app){

	// API for Login
	app.post('/test', function(req, res){
		res.json("Sample Response from Controller ");
	});

}
