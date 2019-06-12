
var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err, result) {
              if (err) {
                throw err;
              }
              cb(result);
            });
    },
    insertOne: function(tableInput, cols, vals, cb){
        var queryString = "INSERT INTO ";
            queryString += tableInput;
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ")";
        
        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            } else {
                cb(result);
            }
        });
    },
    updateOne: function(tableInput, obj, condition, cb){
            var queryString = "UPDATE" + tableInput;
                queryString += objToSql(obj);
                queryString += "WHERE " + condition;

                connection.query(queryString, function(err, result) {
                    if (err) {
                      throw err;
                    }
                    cb(result);
                  });
    },
};