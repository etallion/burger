var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        console.log("hey");
        orm.selectAll("burgers", function(res){
            console.log("hey");
            cb(res);
        });
    },
    create: function(name, cb){
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ],[
            name, false
        ], cb);
    },
    update: function(id, cb){
        var condition = "id=" + id;
        orm.updateOne("burgers", { devoured: true }, condition, cb);
    },
}

module.exports = burger;