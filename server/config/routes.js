<<<<<<< HEAD
let mongoose = require("mongoose");
=======
>>>>>>> 5a1247e2b0a74ca4e47f973b787dfb9eb4119c72
let TaskController = require("../controllers/TaskController.js");

module.exports = function(app){
	app.get("/api/tasks",TaskController.all);
	app.get("/api/tasks/:id",TaskController.find);
	app.post("/api/tasks",TaskController.create);
	app.put("/api/tasks/:id",TaskController.update);
	app.delete("/api/tasks/:id",TaskController.destroy);
}