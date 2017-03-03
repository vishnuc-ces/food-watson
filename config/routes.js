'use strict'

var home = require('./../controllers/HomeController');
var zomato = require('./../controllers/ZomatoController');
var app = require('./../server');

module.exports = function(){

	// API for Login
	app.get('/test', function(req, res){

		home.sample(req,res);
	});

    app.get('/', function(req, res){

        home.home(req,res);
    });

    app.get('/zomatoDataDump', function(req, res){

        zomato.dataPopulate(req,res);
    });

    app.post('/zomato', function(req, res){

        zomato.restaurants(req,res);
    });

}
