var town = require("./town");
var promptly = require('promptly');
//var chalk = require('chalk');

console.log("I would like to go to!!");

//"row"
var params = process.argv;
var what = params[2];
//var user = params[3];

promptly.prompt("What is your name?", function(err, userName){

  if (what === "t"){
    var user = town.topTown(userName);
    console.log(user.msg());
  }
  else {
    console.log("Ok,", user, " you were born in ", town.birthTown(user));
  }

});



//
