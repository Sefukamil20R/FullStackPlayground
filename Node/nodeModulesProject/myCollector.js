// 3. Create another module called "myCollector":
// a. Import both functions from "myFirst" and "mySecond" modules inside of your
// "myCollector" module
// b. Pass the value 5 to both functions that are imported from "myFirst" and
// "mySecond" modules
// c. Run the "myCollector" module on your terminal to display the outputs on your
// console
// using commonjs
const myfirst = require("./myFirst");
const mysecond = require("./mySecond");
// using ES6
// import { myMultiplier } from "./myFirst";
// import { myMultiplier } from "./mySecond";
const fir = myfirst.myMultiplier(5);
const sec = mysecond.myMultiplier(5);
console.log(fir);
console.log(sec);
// While you are in your "myCollector" module:
// a. Write a script inside of your "myCollector" module that passes the number 14 to
// your "myMultiplier" function that you imported from "myFirst" module and
// writes the returned value on a file called "results.txt". The result you write on the
// file should read like this: "The value of 14 when passed through the myMultiplier
// function is ( )."
// ■ Hint: You will need to find the core Node module that will allow you to
// create the “results.txt" file and write the result on this file
let callfir = myfirst.myMultiplier(14);
const fs = require("fs");
finaloutput = `The value of 14 when passed through the myMultiplier function is ${callfir}.\n`;
fs.writeFile("results.txt", finaloutput, function (err) {
  if (err) {
    console.log("error within a file");
    throw err;
  } else {
    console.log("the output is written and saved  to the file");
  }
});
// b. Write another script inside of your "myCollector" module that passes the number
// 14 to your "myMultiplier" function that you imported from "mySecond" module
// and writes the returning value on the same file, the "results.txt" on a new line. The
// result you write on the file should read like this:
// "The value of 14 when passed through the myMultiplier function is ( )”.
// ■ Note: Make sure not to replace/remove what you wrote on your
// "results.txt" file previously.
// ■ Note: Also, make sure to add the new result on a new line, right below the
// result written previously.
let callsec = mysecond.myMultiplier(14);
finaloutputsec = `The value of 14 when passed through the myMultiplier function is ${callsec}`;
fs.appendFile("results.txt", finaloutputsec, (err) => {
  if (err) {
    console.log("error within a file", err);
  } else {
    console.log("the output is added   to the previous file ");
  }
});
