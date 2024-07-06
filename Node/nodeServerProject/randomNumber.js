// Create a module called my "randomNumber".
// a. The "randomNumber" module has a function called random(). The random
// function just returns a random number when it gets executed
// b. Execute the function inside the module
// c. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
// d. Export your module so that it is accessible to other module
function random() {
  return Math.random();
}
const rand = random();
console.log(rand);
module.exports.random = random;
console.log(module);
