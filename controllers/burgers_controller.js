var express = require("express");

var router = express();

var db = require("../models");



router.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(data) {
	res.render("index", {burgers: data});
	});
});


router.post("/", function(req,res){
db.Burger.create({
	burger_name: req.body.bun
}).then(function(data) {
 res.redirect("/");
 })});



router.put("/", function(req,res){
db.Burger.update({

	devoured: true
}, {
	where: {
		id: req.body.id
	} }

).then(function(data) {
 res.redirect("/");
 })
});

// connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?", [req.body.id], function(err, result) {


// router.get("/", function(req, res) {
// connection.query("SELECT * FROM burgers_db.burgers ", function(err, data) {
//     if (err) {
//       throw err;
//     }
//  res.render("index", {burgers: data});
//   });

// });

// router.put("/", function(req,res){
// connection.query("UPDATE burgers_db.burgers SET devoured = true WHERE id = ?", [req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   })});

// router.post("/", function(req,res){
// connection.query("INSERT INTO burgers_db.burgers (burger_name) VALUES (?)", [req.body.bun], function(err, result) {
//     if (err) {
//       throw err; 
//     }

//     res.redirect("/");
//   })});



module.exports = router;