module.exports = function(name, town){

  this.userName = name;
  this.town = town;
  this.msg = function(){
    return this.userName.toUpperCase() + " favourite town : " + town;
  }
}
