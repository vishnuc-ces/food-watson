'use strict'

var server = require('./../server');
var q = require('q');

var sample = function (req,res) {
	
	res.send("Sample Response");
}

module.exports = {
	sample : sample
};