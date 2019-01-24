var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the `router` for the app
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers');
});


router.get('/burgers',function (req,res){
    burger.selectAll(function(data){
        var hbsObject = {burgers:data};
        console.log(hsObject);
        res.render('index',hbsObject);
    });
});

router.post('/burgers/create',function(req,res){
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/burgers');
    });
});

router.put ('burgers/update/:id',function(req, res){
    burger.updateOne(req.params.id, function() {
        res.redirect('/burgers');

    //var condition = 'id = ' + req.params.id;

    //console.log('condition',condition);
    }); 
    
});

// Export routes for server.js to use.
module.exports = router;