// 1. Module Variables: __filename, __dirname, module
// console.log(__filename);
// console.log(__dirname);
// console.log(module);

// 2. Global variables: process, global, console
// console.log(process)
// console.log(Object.keys(global))
// console.log(Object.keys(console))

// 3. IMPORTING & EXPORTING MODULES
const moduleA = require("./my-modules/moduleA");//it expects a string/file path and not a function
//by requiring this, moduleA is equal to whatever i set my exports to which is in moduleA.js
/* . allows to backtrack directories
atm, we are in app.js file and we would have to get to the parent directory of where moduleA.js is
located which is my-modules folder. So to go back one directory, we add . then go into my-module 
folder then into moduleA and ".js" is not needed after moduleA
*/
console.log(moduleA)// this is to only call whats module A which is a function
console.log(moduleA())//this will call what is written in moduleA

console.log(moduleA);
console.log(moduleA.month);

const moduleB = require("./my-modules/moduleB");
console.log(moduleB())

const nameAnything = require("./my-modules/moduleA")//deconstructed the object which is the month variable
console.log(month)


