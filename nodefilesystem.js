var nodefiles = require('fs'); //Sets nodefiles to be the function for fs.
//I only keep one part of this program uncommented at a time to prevent them from interfering with each other. When marking I suggest doing the same.

nodefiles.appendFile('createdfile.txt', 'Hello World', function (err) {
    if (err) throw err;
    console.log("File has been saved");
});
//This function creates a file called createdfile.txt with the text "Hello world".

//nodefiles.writeFile('createdfile.txt', 'Unfunny joke here', function (err) {
//    if (err) throw err;
//    console.log("File has been rewritten");
//});
//This function edits the created file, changing the text within.

//nodefiles.rename('createdfile.txt', 'renamedfile.txt', function (err) {
//    if (err) throw err;
//    console.log("File has been renamed");
//});
//This function renames the created file to renamedfile.txt.

//nodefiles.unlink('renamedfile.txt', function (err) {
//    if (err) throw err;
//    console.log("File has been deleted");
//});
//This function deletes the created file. It only works if the file has been renamed to renamedfile.txt.