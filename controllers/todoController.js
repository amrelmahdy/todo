var Todo = require("./../models/todo");

module.exports.getAllTodos = function (req, res) {
  Todo.find({}, function (error, data) {
        if (error) throw  error;
        res.render("index", { items: data });
    });
};


module.exports.saveTodo = function (req, res) {
  var todo = new Todo(req.body).save(function (error, data) {
      if (error) throw  error;
      res.json(data);
  });
};

module.exports.deleteTodo = function (req, res) {
    var item = Todo.findOne({
        item: req.params.item.replace(/-/g, " ")
    }).deleteOne(function (error, data) {
        if (error) throw  error;
        res.json(data);
    });
};