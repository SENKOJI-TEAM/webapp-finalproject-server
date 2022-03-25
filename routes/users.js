var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var User = require("../db/models/users");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users listing. */
router.get("/", (req, res, next) => {
  User.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

// Create new user
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const user1 = new User({
    username: data.username,
    password: data.password,
    email: data.email,
    phone: data.phone,
    admin: data.admin
  });
  user1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});

router.post("/login", (req, res, next) => {
  // const predefinedUsers = [
  //   {
  //     email: "abc@xyz.com",
  //     password: "123",
  //     name: "Regular User",
  //     admin:"false",
  //   },
  //   { 
  //     email: "xyz@abc.com",
  //     password:"123",
  //     name: "Admin User",
  //     admin:"true",
  //   },
  // ];

  const data = req.body;

  // const foundUser = User.find(
  //   {email: data.email}, 
  //   {password: data.password}, (err, result) => {
  //   if (err){
  //       console.log(err);
  //   }
  //   else{
  //       res.send(result);
  //   }
  // });

  const foundUser = User.find(
    (u) => u.email === data.email && u.password === data.password
  );
  
  console.log("user's data", data);
  console.log(foundUser);

  if (foundUser) {
    delete foundUser.password;
    res.send(foundUser);
  } else {
    res.send({
      error: "user not found",
    });
  }
});

module.exports = router;
