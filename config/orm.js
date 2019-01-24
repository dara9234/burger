var connection = require('../config/connection.js');
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob) {
  //column1 =value, column2 =value2
  var arr = [];

  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + '= ' + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = 'SELECT *FROM' + tableInput;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  //vals is an array of values that we want to save to cols
  // cols are the columns we want to inster the values into

  insertOne: function (table, cols, vals, cb) {
    var queryString = 'INSERT INTO' + table;
    queryString = queryString + '(';
    queryString = queryString + cols.toString();
    queryString = queryString + ')';
    queryString = queryString + 'Values (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ' )';

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  // objColVals would be the column and values that you want to update
  // and exaple of objColvVal would be {name:panter,sleepy:true}
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;

    queryString = queryString + 'SET';
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + 'WHERE';
    queryString = queryString + CONDITION;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};


module.exports = orm;
 




// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//  selectAll()
//   insertOne()
//      updateOne()//
