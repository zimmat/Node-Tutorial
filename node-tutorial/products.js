var fs = require('fs');

module.exports = function(path) {
  var  products = {};

  this.productNames = function(callback) {
    var list = fs.readFileSync('./files/products.csv', 'utf8');
    var items = list.split('\n');
    var productList = [];

    items.forEach(function(item) {
      var productName = item.split(",")[1];
      if (productList.indexOf(productName) === -1) {
        productList.push(productName);
      }
    });

    callback(null, productList);
  };

this.productsSold = function(callback) {
    var list = fs.readFileSync('./files/products.csv', 'utf8');
    var items = list.split('\n');
    items.forEach(function(item) {

        var productName = item.split(",")[1];
        var productsQuantity = Number(item.split(",")[2]);

      if  (products[productName] === undefined){
        products[productName] = productsQuantity;
      } else {
              products[productName] += productsQuantity;
      }

    });
     callback(null, products);
   };
};
