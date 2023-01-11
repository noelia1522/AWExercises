//.........................Functions in TS
//.........Question 0
//Define a type called movies. Any variable of type movie has the following properties"
// Title, Director, Country, Actors,  Released date, Running time, and Abstract

//.........Question1/1
// write a function called greeting that gets 2 parameters;  name and temperature.
// It prints in console "Hi [name]! Today is [temperature] degree"
// It does not return any variable.
//

// //........Question1/2
// //Change the function you wrote in Question1 so it can get any number of names as argument.



// //........Question1/3
// //set the default initial value of temperature to 10.


// ........Question 2
//Suppose that you have the following computer object:

const computer = {
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
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
//The server object doesn’t have the turnOn() and turnOff() methods.
//write one line code to execute the turnOn() method of the computer object on the server object.

/* your code here */


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



//.................Question 5
// Write a function to produce a Date that takes either a timestamp (one argument)
// or a month/day/year specification (three arguments).
// You should write two "overload Signature" and one "Implementation Signature"



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
// len("");
// len([0]);
// len(Math.random() > 0.5 ? "hello" : [0]);



//How you can write a function which accept the random parameter?



//...................Question 7
//write a function that accept 2 parameters:
//a number called num, and an unbounded number of arguments which are numbers too.
//For each number, It returns the multiply of it by num.
