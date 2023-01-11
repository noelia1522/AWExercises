// # JS Scope

// 1. What’s the result of executing this code and why.

// ```
// function test() {
//    console.log(a);
//    console.log(foo());

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test(); //undefined, 2
// ```

// 2. What is result?

// ```
// var a = 1;

// function someFunction(number) {
//   a = 5;
// }

// console.log(a) // 1
// ```

// 3. What will you see in the console for the following example?

// ```
// var person = 'Hermione';
// function b() {
//     person =  'Luna';
// }
// b();
// console.log(person); //Luna
// ```

// 4. What's the result?

// ```
// let text = 'outside';
// function logIt(){
//     console.log(text);
//     let text = 'inside';
// };
// logIt();
// ```
// 5. What will you see in the console for the following example?

// ```
// var person = {name: 'Hermione'};
// function b() {
//     person =  {name: 'Luna'};
//
// }
// b();
// console.log(person); //{name: 'Luna'}
// ```

// // 6. What will you see in the console for the following example?

// // ```
var person = {name: 'Hermione'};
function b() {

  console.log(typeof(person));
  person =  {name: 'Luna'};// this points to the function person(){};
                           //and not the global var person = {name: 'Hermione'};

    return
    function person(){}; //accessible even after "return", because of Hoisting in JS
}
b();
console.log(person);//{name: 'Hermione'};
// // ```

// // 7. Will the function be properly run? //YES!

// ```
someFunction();

function someFunction() { console.log('hi')};
