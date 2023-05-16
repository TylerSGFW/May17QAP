var nodeurl = require('url'); //Sets the URL module to be implemented.
var address = 'https://www.youtube.com/watch?v=xTfWF9S8BCY'; //Providing a URL to be used for the program.
var cleanUrl = nodeurl.parse(address, true); //Sets cleanUrl to be a function that parses an address.
var dataUrl = cleanUrl.query; //Sets dataUrl to be a function that uses cleanUrl to query an address.

console.log("Host: " + cleanUrl.host); //Returns the host of the URL.
console.log("Path name: " + cleanUrl.pathname); //Returns the path name of the URL.
console.log("Search: " + cleanUrl.search); //Returns the search of the URL.
console.log("Video ID: " + dataUrl.v); //Returns the queried ID of the video.