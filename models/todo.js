var mongoose = require("mongoose");
// connect with mongodb
mongoose.connect('mongodb://todouser:rk123456@46.101.151.100:27017/todo', { useNewUrlParser: true });

// create schema
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;



/*
use admin
db.createUser(
    {
        user: "todouser",
        pwd: "PasswordRK",
        roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
)



use test
db.createUser(
  {
    user: "todouser",
    pwd: "rk123456",
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)

*/
