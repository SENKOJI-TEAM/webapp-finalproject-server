//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  admin: Boolean
});

//Export function to create "UserSchema" model class
module.exports = mongoose.model("User", UserSchema);
