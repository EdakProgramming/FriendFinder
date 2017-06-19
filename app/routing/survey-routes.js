// path package provides the desired route to the correct html
// path package provides the desired route to the correct html
var path = require("path");

// Routes
module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	// If the user wants to go directly to the survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
		console.log("Survey");
	});

	// Default route
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
		console.log("Home");
	});
};