
// IIFE

(function() {
  var arra = [];
  for (var i = 0; i < 2003000; i++) {
    arra.push(i * i + i);
  }
})();

// function declaration
function arrayPush() {
   var arra = [];
  for (var i = 0; i < 2003000; i++) {
    arra.push(i * i + i);
  }
}
arrayPush();

//function expression
let arrayPush = function(){
  var arra = [];
  for (var i = 0; i < 2003000; i++) {
    arra.push(i * i + i);
  }
}

//arrow function
let arrayPush = () => {var arra = []; for (var i = 0; i < 2003000; i++) { arra.push(i * i + i);}}

//
// In short, use function declarations when:
//   1.It's more readable.
//   2.you want to create a function on the global scope
//   and make it available throughout your code.
//   3.want to write a recursive function.
// Use function expressions to
//   1.limit where the function is available,
//   2.keep your global scope light, and maintain clean syntax.
