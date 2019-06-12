var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(name, cb){
        orm.updateOne("burgers", [
            "burger_name", "devoured"
        ],[
            name, FALSE
        ], cb);
    },
    update: function(id, cb){
        var condition = "id=" + id;
        orm.update("burgers", { devoured: true }, condition, cb);
    },
}