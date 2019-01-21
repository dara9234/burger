var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the `router` for the app
var router = express.Router();


router.get('/burgers',function (req,res){
    burgers.all(function(data){
        var hbsObject = {burgers:data};
        console.log(hsObject);
        res.render('index',hbsObject);
    });
});

router.post('/burgers/create',function(req,res){
    burger.create(['burger_name','Tuna Burger'], [req.body.Burger_name,req.body.Tuna],function(){
        res.redirect('/burgers');
    });
});

router.put ('burgers/update/:id',function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log('condition',condition);
    res.redirect('/burgers');
    
});

// Export routes for server.js to use.
module.exports = router;