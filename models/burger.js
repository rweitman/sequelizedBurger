var sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING(140),
    	allowNull: false
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });

  return Burger;
    
}

// var orm = {

// selectAll: function(tableName, cb) {
//     var queryString = "SELECT * FROM ??";
//     connection.query(queryString,[tableName],function(err, result) {
//       cb(result);
//     });}
// };

// var eaten = {

// selectAll: function(cb) {
//     connection.query("SELECT * FROM burgers_db.burgers", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// insertOne: function(bun, cb) {
//   connection.query("INSERT INTO burgers_db.burgers (burger_name) VALUES (?)",[bun], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   },

// updateOne: function(id, cb) {
//   connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?",[id], function (err,data){
// if (err) {
//       throw err;
//     }
//     cb(data);
// });
//   }


// };

// module.exports(eaten);