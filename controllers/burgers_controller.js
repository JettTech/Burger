//ROLE OF THE Controller.JS FILE
// ===========================================================
//This CONNECTS the front-end/Client-end TO THE back END.
//IT "ROUTES" the request to the correct "extention," which leads to a chain
//  of sequential functions (between burger.js, and orm.js), which alter
//    the database && WEB-client display through "CRUD" stage/state changes.


// Dependencies
// ===========================================================
var express = require("express");

var router = express.Router();

// LOCAL REQUIREs (local files to require on over...)
// =========================================================== 
var burger = require("../models/burger.js");


// Routes
// =========================================================== 
router.get("/", function(request,result){
	result.redirect("/burgers");
})

router.get("/burgers", function(request, result){
	burger.all(function s(burgerData) {
		result.render("index", {burger_data: burgerData});
	});
});

router.post("/burgers/create", function(request, result){
	burger.create(request.body.burger_name, function(result){
		console.log(result);
		result.redirect("/");
	});
});

router.put("/burgers/update", function(request, result) {
	burger.update(request.body.burger_id, function(result) {
		console.log(result);
		result.redirct("/");
	});
});

// router.delete("/burgers/delete", function(request, result) {
// 	burger.delete(request.body.burger_id, function(result) {
// 		console.log(result);
// 		result.redirct("/");
// 	});
// });