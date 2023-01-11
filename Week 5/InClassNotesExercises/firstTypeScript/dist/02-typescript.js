"use strict";
//.........................Functions in TS
//.........Question 0
//Define a type called movies. Any variable of type movie has the following properties"
// Title, Director, Country, Actors,  Released date, Running time, and Description
var homeAlone = {
    title: "Home Alone",
    director: "mm",
    country: "US",
    actors: ["mm", "dd"],
    releaseDate: new Date("1995-01-25"),
    runningTime: 210,
    description: "kdmck"
};
console.log(Number); //-> [Function: Number]
//number
//.........Question1/1
// write a function called greeting that gets 2 parameters;  name and temperature.
// It prints in console "Hi [name]! Today is [temperature] degree"
// It does not return any variable.
// function greeting(name: string, temperature: number): void {
//   console.log(`Hi ${name}! Today is ${temperature} degree`);
// }
// //........Question1/2
// //Change the function you wrote in Question1 so it can get any number of names as argument.
function greeting(temperature) {
    if (temperature === void 0) { temperature = 10; }
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log("Hi ".concat(names, "! Today is ").concat(temperature, " degree"));
}
// greeting("Rania", "leila", "Jack");
// //........Question1/3
// //set the default initial value of temperature to 10.
// ........Question 2
//Suppose that you have the following computer object:
var computer1 = {
    name: 'MacBook',
    isOn: false,
    turnOn: function () {
        this.isOn = true;
        return "The ".concat(this.name, " is On");
    },
    turnOff: function () {
        this.isOn = false;
        return "The ".concat(this.name, " is Off");
    }
};
//and the following server object:
var server1 = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
//The server object doesn’t have the turnOn() and turnOff() methods.
//write one line code to execute the turnOn() method of the computer object on the server object.
var result1 = computer1.turnOn.apply(server1);
console.log(result1);
var x = Math.random() < .5;
if (x) {
    var b = 'blue';
    console.log(b);
}
else {
    var c = 'red';
    console.log(c);
}
//....................Question 4
// suppose you have these two arrays.
//How can you concat "anotherArray" to "myArray" using apply method?
//Your solution should modify the original array.
// How  can you use push() method to have the same result?
var myArray = ["2019", "2020", "2021"];
var anotherArray = ["2022", "2023"];
var a = ["a"];
// function push(value) {
//   var len = this.length;
//   this[len] = value;
//   len++;
//   this.length = len;
//   return len;
// }
myArray.push.apply(myArray, anotherArray);
//Implementation Signature
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(1, 3, 2020);
console.log(d1);
console.log(d2);
//implementation signature
function len(x) {
    return x.length;
}
//Do you get any error when writing the following codes? why?
// len("");
// len([0]);
// len(Math.random() > 0.5 ? "hello" : [0]);
//How you can write a function which accept the random parameter?
//...................Question 7
//write a function that accept 2 parameters:
//a number called num, and an unbounded number of arguments which are numbers too.
//For each number, It returns the multiply of it by num.
//# sourceMappingURL=02-typescript.js.map