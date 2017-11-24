var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.all("burgers", function(result) { //"burgers" represents the table-name "burgers".
			callback(result); // 
		});
	},
	create: function(name, callback) {
		orm.create("burgers", [
			"burger_name", "devoured"
		],[
			name, false //WHEN ADD the NEW burger, this sets the default of the "devoured"
			// boolean to false (...just like for the others)
		], callback);
	},
	update: function(id, callback) {
		var condition = "id = " + id;
		orm.update("burgers", {
			devoured: true
		}, condition, callback);
	},
	delete: function(id, callback) {
		var condition = "id = " + id;
		orm.update("burgers", {
			devoured: true
		}, condition, callback);
	}
};
module.exports = burger; //exporeted out ...to be imported into the controller.js file