var mysql = require("mysql");
var connection //just creates the connection varibabe (...to be referenced later on)

if (process.env.JAWSDB_URL) { //IF the server contains the JAWS_URL environment variable!! //THUS if the process environment === JAWSDB(the heroku add-on DB), which automatically saves the host mysql connection detials into the JAWSDB environment VAR!!!!...
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Batman123",
		database: "burgers_db"
	})
};

connection.connect(function(error) { // connection starts >>> connection.connect === the mysql npm package function that initiates the connection...
	if(error) {
		return console.log("An error occured when connecting " + error.stack);
	}
	console.log("You are connected as id: " + connection.id);
});
module.exports = connection;


