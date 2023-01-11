"use strict";
// //Rana's Note
// //Type Alliance
// type Context = {
//       appId?: string,
//       userId?: string
// }
// let myContext: Context = {
//       appId: "myappleId",
//       userId: "myusername"
// };
// let otherContext = "this is another context"
// // when we give userId a default value,
// //we remove its optional annotation,?.
// function log(message: string, context: Context = {}) {
//   let time = new Date().toISOString() ;
//   console.log(time, message, context.userId);
// }
// log("this is my apple id", myContext);
// log("this is my apple id");
// //log("this is my apple id", otherContext);
// //log(); //Error
// //-------------------Rest Parameter
// function sumVariadicSafe(...numbers: number[]): number
// {
//   return numbers.reduce((total, n) => total + n, 0)
// }
// //sumVariadicSafe([1, 3, 5]); Error
// // console.log(sumVariadicSafe(1, 3, 5, "hello")); Error
// sumVariadicSafe(1, 3, 5);
// sumVariadicSafe.call(null,1,3,4,5);
// //..................console.log function
// interface Console {
// log(message?: any, ...optionalParams: any[]): void
// }
// // console.log("khdhdjjd", 1,4,5,0, true);
// //...................calling functions
// // apply(thisArg, [argsArray]) // gets 2 parameters
// sumVariadicSafe.apply(null, [3,4,5]);
// //apply example
// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// function greet(this: any, greeting:string, message:string) {
//     return `${greeting} ${this.firstName}. ${message}`;
// }
// // The apply() method invoked the greet() function with the this
// //value set to the person object and arguments as an array
// //['Hello', 'How are you?'].
// let result = greet.apply(null, ['Hello', 'How are you?']);
// console.log(result);
// //........................Why to use .apply or .call?
// // 1- Function borrowing
// // The apply() method allows an object to borrow the method of another object
// // without duplicating the code.
// // 2- Append an array to another
var arr = [1, 2, 3];
var numbers = [4, 5, 6];
// //use apply on push method, this = array
// // take advantage of the fact that numbers is an array
// // and not single valu.
arr.push.apply(arr, numbers);
console.log(arr); //[1, 2, 3, 4,5,6]
// // .......................call(thisArg, param1, param2, ...) // gets n parameters
// sumVariadicSafe.call(null, 3,4,5);
// //........................bind- same as call
// // same as call(thisArg, param1, param2, ...)
// // gets n parameters
// // but returns a new function.should be invoked after declaring, with () or call or apply
// sumVariadicSafe.bind(null, 4,5,6)();
// //Unlike the call() and apply() methods, the bind() method doesn’t immediately execute
// //the function. It just returns a new version of the function whose "this" sets to
// //thisArg argument.
// //........................when to use bind?
// // 1. function binding
// // https://www.javascripttutorial.net/javascript-bind/
// //........................function overloading
// //The second approach is to use the function overloading feature.
// //I recommend it when the function signature is relatively complex and
// //has multiple types involved.
// // Overload signatures
// function greeting(person: string): string;
// function greeting(persons: string[]): string[];
// // Implementation signature
// function greeting(person: unknown): unknown {
//   if (typeof person === 'string') {
//     return `Hello, ${person}!`;
//   } else if (Array.isArray(person)) {
//     return person.map(name => `Hello, ${name}!`);
//   }
//   throw new Error('Unable to greet');
// }
// console.log(greeting('World'));
// console.log(greeting(['Jane', 'Joe']));
// ///........
// //Function with string type parameter
// function add(a:string, b:string): string;
// //Function with number type parameter
// function add(a:number, b:number): number;
// //Function Definition
// function add(a: any, b:any): any {
//     return a+ b;
// }
// //Result
// console.log("Addition: " +add("Hello ", "JavaTpoint"));
// console.log("Addition: "+add(30, 20));
// //The implementation signature must also be compatible with the
// //overload signatures. For example, these functions have errors because
// // the implementation signature doesn’t match the overloads in a correct way:
// function fn(x: boolean): void;
// // Argument type isn't right
// // function fn(x: string): void;
// //implementation
// function fn(x: boolean) {}
// //Never example
// //Some functions never return a value:
// function fail(msg: string): never {
//   throw new Error(msg);
// }
//# sourceMappingURL=fucntions-typescript.js.map