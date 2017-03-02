var server = require('./../server');
var jsonfile = require('jsonfile');
var Category = require('./../models/category');
var Cuisine = require('./../models/cuisines');
var Collection = require('./../models/collections');
var Establishment = require('./../models/establishments');
var fs = require('fs');

var datapopulate = function(req, res){

    // Zomato Category Data API
    // jsonfile.readFile('/home/vishnuc/projects/food-watson/zomato-categories.json', function(err, obj) {
    //     if (err){
    //         console.log(err);
    //     }
    //     var category_list = obj['categories'];
    //     for (var i =0; i < category_list.length; i++){
    //         console.log('category id:', category_list[i].categories['id']);
    //         console.log('category name:', category_list[i].categories['name']);
    //         var category = Category();
    //         category.name = category_list[i].categories['name'];
    //         category.zomatoId = category_list[i].categories['id'];
    //         category.save(function (err, resp) {
    //             if (err){
    //                 console.log(err)
    //             }
    //             res.json(resp)
    //         })
    //     }
    // });

    // Zomato Cuisines Data API
    // jsonfile.readFile('/home/vishnuc/projects/food-watson/zomato-cuisines.json', function(err, obj) {
    //     if (err){
    //         console.log(err);
    //     }
    //     var cuisine_list = obj['cuisines'];
    //     for (var i =0; i < cuisine_list.length; i++){
    //         var cuisine = Cuisine();
    //         cuisine.cuisine_name = cuisine_list[i].cuisine['cuisine_name'];
    //         cuisine.cuisine_id = cuisine_list[i].cuisine['cuisine_id'];
    //         cuisine.save(function (err, resp) {
    //             if (err){
    //                 console.log(err)
    //             }
    //             res.json(resp)
    //         })
    //     }
    // });

    // Zomato Collections Data API
    // jsonfile.readFile('/home/vishnuc/projects/food-watson/zomato-collections.json', function(err, obj) {
    //     if (err){
    //         console.log(err);
    //     }
    //     var collection_list = obj['collections'];
    //     for (var i =0; i < collection_list.length; i++){
    //         var collection = Collection();
    //         collection.title = collection_list[i].collection['title'];
    //         collection.collection_id = collection_list[i].collection['collection_id'];
    //         collection.res_count = collection_list[i].collection['res_count'];
    //         collection.image_url = collection_list[i].collection['title'];
    //         collection.url = collection_list[i].collection['image_url'];
    //         collection.description = collection_list[i].collection['description'];
    //         collection.share_url = collection_list[i].collection['share_url'];
    //         collection.save(function (err, resp) {
    //             if (err){
    //                 console.log(err)
    //             }
    //             res.json(resp)
    //         })
    //     }
    // });
    // Zomato Establishment Data API

    jsonfile.readFile('/home/vishnuc/projects/food-watson/zomato-establishments.json', function(err, obj) {
        if (err){
            console.log(err);
        }
        var establishment_list = obj['establishments'];
        for (var i =0; i < establishment_list.length; i++){
            var establishment = Establishment();
            establishment.name = establishment_list[i].establishment['name'];
            establishment.establishmentId = establishment_list[i].establishment['id'];
            establishment.save(function (err, resp) {
                if (err){
                    console.log(err)
                }
                res.json(resp)
            })
        }
    });
}

module.exports = {
    datapopulate : datapopulate,
};