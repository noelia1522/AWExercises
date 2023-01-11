import { resolve } from "path";

//Returning null
function ask() {
    let answer = "tenth of july";
    return answer;
}

// function parse(birthday: string | number | Date): Date | null{
//     let date = new Date(birthday);
//         if (!isValid(date)) {
//             return null
//         }
//             return date;
// }

//     // Checks if the given date is valid
function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime())
    }

// let date = parse(ask())

// if (date) {
//     console.info('Date is', date.toISOString()) }
// else{
//     console.error('Error parsing date for some reason')
// }

// console.log("Here I am after error");

//Throwing Exception
function parse(birthday: string): Date {
    let date = new Date(birthday)
    if (!isValid(date)) {
        throw new RangeError('Enter a date in the form YYYY/MM/DD') ;
    }
        return date;
    }

try {
    let date = parse(ask())
    console.info('Date is', date.toISOString())
}
catch (e) {
    if (e instanceof RangeError) {
    console.error(e.message)
} else throw(e);
}


console.log("Here I am after error");

////Returning Exception
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse( birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {

    let date = new Date(birthday)
    if (!isValid(date)) {
        return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
}
    if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError('Are you a timelord?')
}
    return date
}

let result = parse(ask()) // Either a date or an error

if (result instanceof InvalidDateFormatError) {
    console.error(result.message)
} else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message) }else{
    console.info('Date is', result.toISOString())
}

console.log("Here I am after error");


//Examples

// try {
//   adddlert("Welcome guest!");
// }
// catch(err) {
//   document.getElementById("demo").innerHTML = err.message;
// }


function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";

    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}


//What errors might happen here?
//try to predict all of the errors here and catch them when you call the function
function getRectArea(width:number, height:number) {

}


// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;

//   try{}
//   catch{}

// }

//Handling Errors in promises:

function getUserById(id){
    if(typeof id !== number || id <=0)
        throw new Error('invalid Id argument');

    return new Promise((resolve, reject) =>
    resolve({
        id: id,
        username: "admin"

    })
    )
}

try {
    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}

//Caught by try/catch Error: Invalid id argument

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            throw new Error('Unauthorized access to the user data');
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}
//Caught by .catch Error: Unauthorized access to the user data
