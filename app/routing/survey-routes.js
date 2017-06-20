// Dependencies
var path = require("path");
var friends = require("../data/friends.js");

// Routes
module.exports = function(app) {
	
	// HTML routes
	app.get("/", function(req, res) {
		// console.log("Home");
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// If the user wants to go directly to the survey
	app.get("/survey", function(req, res) {
		// console.log("Survey");
		res.sendFile(path.join(__dirname, "../public/survey.html"));
		
	});

	// API routes

	// Get the data from the friends file in JSON format
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		/* This route will compare the data on the friends file against the answers given and 
		 * chose the friend that most likely resembles the person taking the survey by comparing
		 * the two scores. 
		 *
		 *
		 *
		*/
	});










};