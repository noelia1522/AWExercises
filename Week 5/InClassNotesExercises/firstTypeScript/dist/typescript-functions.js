"use strict";
// //.........................Functions in TS
// //.........Question 0
// //Define a type called movies. Any variable of type movie has the following properties"
// // Title, Director, Country, Actors,  Released date, Running time, and Abstract
// //.........Question1/1
// // write a function called greeting that gets 2 parameters;  name and temperature.
// // It prints in console "Hi [name]! Today is [temperature] degree"
// //It does not return any variable.
// // function Greet(name: string, temperature: number) {
// //     return "Hello";
// // }
// // //........Question1/2
// // //Change the function you wrote in Question1 so it can get any number of names as argument.
// // function Greet(temperature: number, ...names: string[]) {
// //     return
// // }
// // //........Question1/3
// // //set the default initial value of temperature to 10.
// // function Greet(temperature: number = 10, ...names: string[]) {
// //     return
// // }
// // ........Question 2
// //Suppose that you have the following computer object:
// const computer = {
//     name: 'MacBook',
//     isOn: false,
//     turnOn() {
//         this.isOn = true;
//         return `The ${this.name} is On`;
//     },
//     turnOff() {
//         this.isOn = false;
//         return `The ${this.name} is Off`;
//     }
// };
// //and the following server object:
// const server = {
//     name: 'Dell PowerEdge T30',
//     isOn: false
// };
// //The server object doesn’t have the turnOn() and turnOff() methods.
// //write one line code to execute the turnOn() method of the computer object on the server object.
// /* your code here */
// let result2 = greet.apply(person, ['Hello', 'How are you?']);
// console.log(result2);
// //...................Question 3
// //Considering the following code,
// //what would be the output of console.log()
// // in "if" and "else" black?
// type Color = 'red';
// let x = Math.random() < .5
//   if(x){
//     type Color = 'blue'; // This shadows the Color declared above.
//     let b: Color = 'blue';
//     console.log(b);
//   } else{
//     let c: Color = 'red';
//     console.log(c);
// }
// //like let and const, type aliases are block-scoped.
// //Every block and every function has its own scope,
// //and inner type alias declarations shadow outer ones:
// //....................Question 4
// // suppose you have these two arrays.
// //How can you concat "anotherArray" to "myArray" using a built-in method other than push?
// //Your solution should modify the original array.
// // How you can use push() method to have the same result?
// let myArray = ["2019", "2020", "2021"];
// let anotherArray = ["2022", "2023"];
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(...arr2)
// //.................Question 5
// // Write a function to produce a Date that takes either a timestamp (one argument)
// // or a month/day/year specification (three arguments).
// // You should write two "overload Signature" and one "Implementation Signature"
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3);
// //................Question 6
// //consider a function that returns the length of a string or an array:
// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }
// //Do you get any error when writing the following codes? why?
// // len(""); // OK
// // len([0]); // OK
// // len1(Math.random() > 0.5 ? "hello" : [0]);
// // This function is fine; we can invoke it with strings or arrays.
// //However, we can’t invoke it with a value that might be a string or an array,
// //because TypeScript can only resolve a function call to a single overload:
// //How you can write a function which accept the 3rd signature?
// function len1(x: any[] | string) {
//   return x.length;
// }
// //...................Question 7
// //write a function accept 2 parameters:
// //a number called num, and an unbounded number of arguments which are numbers too.
// //For each number, It returns the multiply of it by num.
// function multiply(n: number, ...m: number[]) {
//   return m.map((x) => n * x);
// }
// const a = multiply(10, 1, 2, 3, 4); //output => 'a' gets value [10, 20, 30, 40]
//# sourceMappingURL=typescript-functions.js.map