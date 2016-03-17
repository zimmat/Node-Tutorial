 var findLines = function(folderName) {
  var fs = require('fs');
  var data = [];

  var readFolder = fs.readdirSync('./files/week1');
  // return (files);
  readFolder.forEach(function(folder){
    // for (var i = 0; i < files.length;i++){
    //return(folder);
  //}
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

// //
// files.forEach(function(file) {
//       var linesInFilesAsync = fs.readFile('./files/week1/', err, file).split('\n');
//       data.push(linesInFiles);
//       if (err) throw err;
//       console.log(linesInFiles);
//     }
//   );

// exports.linesInFilesAsync = function(folderName, callback){
//   var linesInFiles = findLines(folderName);
//     callback(null, linesInFile)
//     console.log(linesInFile);
// }
