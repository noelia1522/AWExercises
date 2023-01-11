"use strict";
//Rana's Note
// Aliases are never inferred by TypeScript, so you have to type them explicitly:
var age = 55;
var driver = {
    name: 'James May',
    age: age
};
//Any error?
var myAge = 34;
myAge = 70;
//Like JavaScript variable declarations (let, const, and var),
//you can’t declare a type twice:
// type Color = 'red'
// type Color = 'blue'
//Type aliases are useful for DRYing up repeated complex types,
// and for making it clear what a variable is used for
//like let and const, type aliases are block-scoped.
//Every block and every function has its own scope,
//and inner type alias declarations shadow outer ones:
//# sourceMappingURL=typeAliases.js.map