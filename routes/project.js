var models = require('../models');

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;
	models.Project
		.find({"_id": projectID})
		.exec(displayProject);

	function displayProject(err, specificProject){
		res.json(specificProject[0]);
		
	}
  // query for the specific project here
  // send a response using res.json(...);
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newProject = new models.Project(form_data);

	newProject.save(function(err){
		if(err)	console.log(err);
		res.send();
	});
}
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

	models.Project
		.find({"_id": projectID})
		.remove()
		.exec(removed);

	function removed(err){
		res.send();
	}
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}
