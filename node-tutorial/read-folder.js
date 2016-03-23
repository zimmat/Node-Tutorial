 var findLines = function(folderName) {
  var fs = require('fs');
  var data = [];

  var readFolder = fs.readdirSync('./files/week1');

  readFolder.forEach(function(folder){

  });
  readFolder.forEach(function(file) {
    var lines = fs.readFileSync('./files/week1/' + file, 'utf8');
    var linesInFiles = lines.split('\n');
      linesInFiles.forEach(function(fileInFiles){
          data.push(fileInFiles);
        });
    //  console.log(lines);
    // return (linesInFiles);
    //
    });
  console.log(data);
  return data;
};
  exports.linesInFiles = function(folderName) {
    var data = findLines(folderName);
    return data;
  }



exports.linesInFilesAsync = function(folderName, callback){
  var data = findLines(folderName);
    callback(null, data);
    return data;
}
