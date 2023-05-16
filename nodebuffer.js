var bufferedString = Buffer.from("Supercalifragilisticexialidocious"); //First string to be converted to a buffer.
console.log(bufferedString); //Returns "Supercalifragilisticexialidocious" as a stream of binary data.
var bufferedStringTwo = Buffer.from("Qwertyuiopasdfghjklzxcvbnm"); //Second string to be converted to a buffer.
console.log(bufferedStringTwo); //Returns "Qwertyuiopasdfghjklzxcvbnm" as a stream of binary data.

var comparedString = Buffer.compare(bufferedString, bufferedStringTwo); //Sets comparedString to compare the two strings.
console.log("Comparsion Result: " + comparedString); // Returns 1 due to bufferedString being higher than bufferedStringTwo.

console.log("Does this contain list? " + bufferedString.includes('list')); //Checks the string to see if it contains "list." Returns true as "Supercalifragilisticexialidocious" contains "list".
console.log("Does this contain list? " + bufferedStringTwo.includes('list')); //Checks the string to see if it contains "list." Returns false as "Qwertyuiopasdfghjklzxcvbnm" does not contain "list".

console.log("Number of bytes: " + bufferedString.length); //Displays the length of the string in number of bytes.
console.log("Number of bytes: " + bufferedStringTwo.length); //Displays the length of the string in number of bytes.