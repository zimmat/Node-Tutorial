  var fs = require('fs');

  module.exports = function(path) {

      this.productNames = function(callback) {
        var list = fs.readFileSync('./files/products.csv', 'utf8');
        var items = list.split('\n');
        var productList = [];
        var productSold = {};


        items.forEach(function(item) {
          var productName = item.split(",")[1];
          if (productList.indexOf(productName) === -1) {
            productList.push(productName);
          }

        })

        callback(null, productList);
      }
    }
this.productsSold = function(callback) {
  var list = fs.readFileSync('./files/products.csv', 'utf8');
  var items = list.split('\n');
  
}
