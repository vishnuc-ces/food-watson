'use strict'

var home = require('./../controllers/HomeController');
var zomato = require('./../controllers/ZomatoController')

module.exports = function(app){

	// API for Login
	app.get('/test', function(req, res){

		home.sample(req,res);
	});

    app.get('/', function(req, res){

        home.home(req,res);
    });

    app.get('/zomatodatadump', function(req, res){

        zomato.datapopulate(req,res);
    });

}
