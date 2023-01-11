"use strict";
// //Promise
// // In the example, a promise takes callback function as a parameter.
// // Its callback function has 2 parameters resolve and reject.
// // If the condition inside promise is true then the promise returns resolve else it returns the reject.
var mypromise = new Promise((resolve, reject) => {
    console.log("Demo to show promise in Typescript !!");
    resolve(100);
    reject("Error");
});
mypromise.then((val) => console.log(val))
    .then((val) => console.log("Value form the promse function is " + val))
    .catch((err) => console.log("inside error block " + err));
// // PROMISE-1
var mypromise = new Promise((resolve, reject) => {
    console.log("Demo to show promise in Typescript !!");
    reject("this is an reject response form the promise !!!!");
});
mypromise.then((val) => val)
    .then((val) => console.log("Value form the promse function is " + val))
    .catch((err) => console.log("inside error block " + err));
//setTimeout
var sample_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is an asynchronous call which has a timeout of 20 milli seconds!");
        resolve();
    }, 2000);
});
// make a function that takes in a single parameter
// and returns a new promise. using setTimeout,
// after 500 milliseconds, the promise will either
// resolove or reject. if the input is a string,
// the promise resolves with that same string
// uppercased. if the input is anything but a string
// it rejects with that same input
//
// call the function delayedUpperCase
// // code goes here
const delayedUpperCase = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (typeof param === 'string') ? resolve(param.toUpperCase()) : reject(param);
        }, 500);
    });
};
delayedUpperCase(123)
    .then((value) => {
    console.log(value);
})
    .catch((value) => {
    console.log(value);
});
//types in promises
// Using Promise, write a function that produces a random number.
//if it is bigger than 5, function resolve true. else reject "pr_random_nm is less than 5"
//type here should match just resolve returned type
const emp_promise = new Promise((resolve, reject) => {
    const pr_random_nm = Math.random() * 5;
    if (pr_random_nm > 21) {
        resolve(true);
    }
    reject(3);
});
emp_promise.then((value) => {
    console.log(value);
})
    .catch((error) => console.log("Error if any - ", error));
//Defining Interface for callback functions
function greeter(message) {
    console.log(`${message}, how are you doing?`);
}
function sayHi(callback) {
    callback('Hi!');
}
// function sayHi(callback) {
//   callback('Hi!')
// }
sayHi(greeter);
// let url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0672ad160bef8b6d373d9455263f2";
//     fetch(url)//Fetch is not failed. Still returns a promiss. but ok = false
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function (data) {
//         console.log((data));
//       })
//# sourceMappingURL=asynch.js.map