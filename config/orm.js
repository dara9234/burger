Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  select: (whatToSelect, tableName) => {
    const query = 'SELECT ?? FROM ??';
    // SELECT party_name FROM parties;
    // SELECT 'party_name' FROM 'parties';
    
    connection.query(query, [whatToSelect, tableName],
      (err, result) => {
          if(err) {
            throw err;
          }

          console.log(result);
      })
  },
  selectWhere: (table, colToSearch, value) => {
    const query = 'SELECT * FROM ?? WHERE ?? = ?';

    connection.query(query, [table, colToSearch, value],
      (err, result) => {
          if(err) {
            throw err;
          }

          console.log(result);
      })
  },
  // const whatToSelect = ['client_name', 'party_name'];
  //orm.leftJoin(whatToSelect, 'clients', 'parties', 'id', 'client_id');
  leftJoin: (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) => {
    const query = `
      SELECT ??
      FROM ?? AS tOne
      LEFT JOIN ?? AS tTWo
      ON tOne.?? = tTwo.??`

    connection.query(query, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      (err, result) => {
        if(err){
          throw err
        }

        console.log(result);
      })
  }
};

module.exports = orm;




// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//  selectAll()
//   insertOne()
//      updateOne()
