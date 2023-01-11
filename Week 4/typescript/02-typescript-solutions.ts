//.........................Functions in TS
//.........Question 0
//Define a type called movies. Any variable of type movie has the following properties"
// Title, Director, Country, Actors,  Released date, Running time, and Description

type Movies = {
  title: string,
  director: string,
  country: string,
  actors: string[],
  releaseDate: Date,
  runningTime: number,
  description: string

}
let homeAlone: Movies = {
  title: "Home Alone",
  director: "mm",
  country: "US",
  actors: ["mm", "dd"],
  releaseDate: new Date("1995-01-25"),
  runningTime: 210,
  description: "kdmck"
}

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

function greeting(temperature: number = 10, ...names: string[]): void {
  console.log(`Hi ${names}! Today is ${temperature} degree`);

}
// greeting("Rania", "leila", "Jack");

// //........Question1/3
// //set the default initial value of temperature to 10.


// ........Question 2
//Suppose that you have the following computer object:

const computer1 = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

//and the following server object:
const server1 = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
//The server object doesn’t have the turnOn() and turnOff() methods.
//write one line code to execute the turnOn() method of the computer object on the server object.

let result1 = computer1.turnOn.apply(server1);
console.log(result1);

//...................Question 3

//Considering the following code,
//what would be the output of console.log()
// in "if" and "else" black?

type Color = 'red';
let x = Math.random() < .5
  if(x){
    type Color = 'blue';
    let b: Color = 'blue';
    console.log(b);

  } else{
    let c: Color = 'red';
    console.log(c);
}



//....................Question 4
// suppose you have these two arrays.
//How can you concat "anotherArray" to "myArray" using apply method?
//Your solution should modify the original array.
// How  can you use push() method to have the same result?

let myArray = ["2019", "2020", "2021"];
let anotherArray = ["2022", "2023"];
let a = ["a"];

// function push(value) {
//   var len = this.length;
//   this[len] = value;
//   len++;
//   this.length = len;
//   return len;
// }

  myArray.push.apply(myArray, anotherArray);

// myArray.push.apply(anotherArray, ["2022", "2023"]); //WRONG!
// console.log(myArray); //["2019", "2020", "2021"]
// console.log(anotherArray); //[ '2022', '2023', '2022', '2023' ]


// myArray.push(...anotherArray);



//.................Question 5
// Write a function to produce a Date that takes either a timestamp (one argument)
// or a month/day/year specification (three arguments).
// You should write two "overload Signatures" and one "Implementation Signature"

//Overload signatures

// function makeDate2(timestamp: number | string): Date;

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y:number): Date;

//Implementation Signature
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if( d !== undefined && y !== undefined){
    return new Date(y, mOrTimestamp, d);
  }
  else{
    return new Date(mOrTimestamp);
  }

}

const d1 = makeDate(12345678);
const d2 = makeDate(1, 3, 2020)
console.log(d1);
console.log(d2);



//................Question 6
//consider a function that returns the length of a string or an array:

//overload signature
function len(s: string): number;
function len(arr: any[]): number;

//implementation signature
function len(x: any) {
  return x.length;
}

//Do you get any error when writing the following codes? why?
len("hello");
len([0]);
len(Math.random() > 0.5 ? "hello" : [0]);



//How you can write a function which accept the random parameter?
function len1(x: any[] | string) {
  return x.length;
}
// len1(4);


//...................Question 7
//write a function that accept 2 parameters:
//a number called num, and an unbounded number of arguments which are numbers too.
//For each number, It returns the multiply of it by num.
