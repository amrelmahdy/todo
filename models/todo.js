var mongoose = require("mongoose");
// connect with mongodb
mongoose.connect('mongodb://46.101.151.100:27017/todo', { useNewUrlParser: true });
// create schema
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

