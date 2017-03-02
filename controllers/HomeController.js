'use strict'

var server = require('./../server');
var fs = require('fs')
var http = require('http')
var q = require('q');
var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

// Uses Watson natural language understanding api
var sample = function (req,res) {

    var nlu = new NaturalLanguageUnderstandingV1({
        username: '708921de-baa9-4029-9df2-19fade244e31',
        password: 'PIju7DbJ36v6',
        version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2016_01_23
    });

    nlu.analyze({
        'html': 'i hate chineese food and love indian grilled chicken.', // Buffer or String
        'features': {
            'concepts': {},
            'keywords': {},
			'emotion': {},
			'categories': {},
			'relations': {},
			'sentiment': {}
        }
    }, function(err, response) {
        if (err)
            res.json('error:', err);
        else
            res.json(response);
    });
}


var home = function (req,res) {

    var natural_language_classifier = new NaturalLanguageClassifierV1({
        username: 'cb4f64d0-f5de-4a9c-9aed-795c1b1a6d26',
        password: 'eSolpUew07Wj',
    });

    const params = {
        language: 'en',
        name: 'my-classifier',
        training_data: fs.createReadStream('/home/vishnuc/projects/food-watson/demo.csv')
    };
    console.log(params['training_data'])
    natural_language_classifier.create(params, function(err, response) {
        if (err) {
            console.log(err);
        } else {
            // copy the classifier_id from the response
            res.json(response);
        }
    });
}

module.exports = {
	sample : sample,
    home : home
};