const test = require("olusammy-simple-package");

console.log(test.pluck([{ name: "sam", age: "23" }, { name: "ola" }], "name")); // [3, 4, 5]
// console.log(test)