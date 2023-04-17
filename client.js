import { pluck } from "olusammy-simple-package";

console.log(pluck([{ name: "sam", age: "23" }, { name: "ola" }], "name")); // [3, 4, 5]
