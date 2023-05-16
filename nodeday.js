var dayjs = require('dayjs'); //Sets dayjs to be the function that uses the day.js program.

console.log(dayjs()); //Logs the current time.

var unixDate = dayjs.unix(1122334455); //Providing a Unix timestamp in seconds for dayjs to use.
console.log(unixDate); //Logs the Unix timestamp as a date. 

var datea = dayjs(); //Gets the current date to be modified.
var dateb = datea.add(28, 'week'); //Modifies datea by adding 28 weeks.
console.log(dateb); //Logs the current date, which has been modified to be 28 weeks into the future.

var startDate = dayjs().startOf('year'); //Gets the current date, which is then changed to be the start of the year.
console.log(startDate); //Logs the beginning of the current year.