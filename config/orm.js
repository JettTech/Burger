//ROLE OF THE ORM (Object Relational Mapping) FILE
// =====================================================================================
//The purpose is to write functions into which inputs and conditions are passed
//in a way that turns the input/conditions into Database commands like SQL

// The Requires
// =====================================================================================
var connection = require("./connection.js");


// Global Functions
// =====================================================================================
function printQuestionMark(number) {
	var arrary = [];

	for (var i = 0; i < number; i++) {
		array.push("?"); //this will allow that (for ever num exisiting/pushed thorugh), 
		//there is an option to call it. "?" reference an option/non-mandatory
		// query to be added to the query filter && action.
	}
	return array.toString(); //Transfroms the list of nums in the array INTO a Strings	
}

function objToSql(object) {
	var array = [];

	for (var x in object) {
		array.push(x + " = " + object[x]); //this will push the index AND the value of that index from the object >>> together into the above Array.
	}
	return array.toString();
}


// The ORM Logic: Where inputs (through functions) output SQL Queries/Actions..
// =====================================================================================
var orm = {
	all: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		
		connection.query(queryString, function(error, result) {
			if(error) throw error;

			callback(result); //this should console.log(/print out) all the logged items in the provided table(which in this case should the "burgers" table);
		});
	}, // !! MAKE SURE THIS IS A COMMA, NOT a semi-colon !!

	create: function(table, columns, values, callback) {
		var queryString = "INSERT INTO" + table;

		queryString += " (";
		queryString += columns.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);
		queryString += ") ";

		console.log(queryString);
		connection.query(queryString, values, function(error, result) {
			if (error) throw error

			callback (result);
		});
	},  // !! MAKE SURE THIS IS A COMMA, NOT a semi-colon !!

	update: function(table, objColumnValues, condition, callback) {
		var queryString = "UPDATE " + table;

		queryString += "SET";
		queryString += objToSql(objColumnValues);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(error, result) {
			if (error) throw error

			callback (result);
		});
	} //,  // !! MAKE SURE THIS IS A COMMA, NOT a semi-colon !!

	// delete: function(table, objColumnValues, condition, callback) {
	// 	var queryString = "DELETE FROM" + table;

	// 	queryString += "SELECT "; //MAKE SURE this is the right QUEREY (/action) choice!
	// 	queryString += objToSql(objColumnValues);
	// 	queryString += " WHERE ";
	// 	queryString += condition;

	// 	console.log(queryString);
	// 	connection.query(queryString, function(error, result) {
	// 		if (error) throw error

	// 		callback (result);
	// 	});
	// }
};
module.exports = orm

