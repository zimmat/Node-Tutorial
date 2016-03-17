var User = require("./user");

exports.topTown = function(name){
  if (name === "and"){
    return new User("and", "London")
  }

  if (name == "zim"){
    return new User("zim", "Umtata")
  }

  if (name == "rox"){
    return new User("rox", "George");
  }

  return {}
  // lots and lots of name
};

exports.birthTown = function(name){
  if (name === "and"){
    return "George"
  }

  if (name == "zim"){
    return "Umtata"
  }

  if (name == "rox"){
    return "Cape Town";
  }

  return "..."
  // lots and lots of name
};

/*
console.log(myTopTown("and"));
console.log(myTopTown("bob"));
console.log(myTopTown("zim"));
console.log(myTopTown("jo"));
console.log(myTopTown("rox"));
*/
//London
//Sorry ...
//Umtata
//Sorry
//George
