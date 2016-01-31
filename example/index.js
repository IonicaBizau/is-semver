const isSemver = require("../lib");

console.log(isSemver("1.2.3"));
// => true

console.log(isSemver("a.b.c"));
// => false

console.log(isSemver("foo"));
// => false
