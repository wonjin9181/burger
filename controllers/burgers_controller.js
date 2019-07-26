var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

router.put("/api/burgers/:id", function(req, res){
    

    burger.updateOne({
        devoured: req.body.devoured
    },
    req.params.id,
    function(data){
        if (data.changedRows === 0){
            return res.status(500).end()
        }
        res.status(200).end();
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
      });
    });


module.exports = router;