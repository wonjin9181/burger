var connection = require("./connection.js");

var ORM = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, data){
            if (err){
                throw err;
            }
            cb(data);
        })
    },

    insertOne: function(tableInput, burgerName, cb){
        var queryString = "INSERT INTO " +tableInput+ " (burger_name) VALUES (?)"
        connection.query(queryString, [burgerName], function(err, data){
            if (err) {
                throw err;
            }
            cb(data);
        })
    },

    updateOne: function(tableInput, id, cb){
        var queryString = "UPDATE "+ tableInput +" SET devoured = true WHERE id =?"
        connection.query(queryString, [id],function(err, data){
            if (err) {
                throw err;
            }
            cb(data)
        })
    }
}

module.exports = ORM;