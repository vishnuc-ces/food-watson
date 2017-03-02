'use strict'

var home = require('./../controllers/HomeController');

module.exports = function(app){

	// API for Login
	app.get('/test', function(req, res){

		home.sample(req,res);
	});

    app.get('/', function(req, res){

        home.home(req,res);
    });

}
