module.exports = function (app) {
  var todoController = require("./../controllers/todoController");
  app.get("/", todoController.getAllTodos);
  app.post("/todo/add",  todoController.saveTodo);
  app.delete("/todo/:item",  todoController.deleteTodo);
};