//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var DonationSchema = new Schema({
  itemName: String,
  quantity: Number,
  donatorName: String,
  contactNo: String
});

//Export function to create "DonationSchema" model class
module.exports = mongoose.model("Donation", DonationSchema);
