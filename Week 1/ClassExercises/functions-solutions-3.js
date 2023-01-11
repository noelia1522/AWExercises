
// const foo = null ?? "abcd";
// console.log(foo);

// let a;
// const baz = a ??23;
// console.log(baz);



// let a= 2;
// let b ="1";
// console.log(a-b);


// const person ={
//   "name": "Jack",
//   "surname": "Smith",
//   "family Name": "Smith",
//   age: 32,
//   job: "sales Manager",
//   isMarried: function(){
//     console.log("the person is married")
//   }

// }
// person["family Name"]
// console.log(person["family Name"]);

// console.log(person.name );
// console.log(person["name"] );
// person.gender = "male";
// delete person.familyName;
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));

// let age = 22;
// let myAge ="22";

// if (age === myAge){
//   console.log("Ages are equal.");
// }
// else{
//   console.log("Not equal!");
// }


//Conditionals

// Question 2
// function compare_to_100 (x) {
//   if (x > 100) {
//     return "greater"
//   } else if (x < 100) {
//       return "smaller"
//   } else {
//     return "equal"
//   }
// }
function compares_to_100 (x){
  if (x !== 0 ) return ((x - 100 > 0)  ? "greater" : "smaller");
  return "true";
}
let y = compares_to_100 (0);
// console.log(y);

/** 3. Rewrite the function below so that it only contains one line of code.
 * The function takes a number as a parameter and returns true if it's 18 or greater,
 * and false if it's less than 18.
 */

function legalAge(age) {
  return (age - 18 >= 0 ? "true" : "false")
}

// console.log(legalAge(6));


/* 6: You're a bouncer at a bar. Given an `age` variable, create a function `greet(age)`
  with conditional that satisfies the following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.*/



function printMessage(age) {
  // const [case1, case2, case3, case4] = [age > 21, 18< age && age <21, age < 18, age > 75];
  console.log(case4);

  let myCase, case1, case2, case3, case4;
  myCase = age > 21 ? 1:0;
  myCase = (18 < age && age <21) ? 2: 0;
  // let case3 = age < 18 ? 3:0;
  // let case4 = age > 75;


  switch(cases) {
  case case4:
    console.log("Are you sure you want to be here?");
    break;
  case case3:
    console.log("You're too young to be in here!");
    break;
  case case2:
    console.log("Come on in (but no drinking)!");
    break;
  case case1:
    console.log("Come on in!");
    break;

  default:
    // code block
}

}
// printMessage(32);

// 7: loops - Your task is to create a loop that prints out all
// the odd numbers between 1 and 100...twice! Your solution must use one
// `for` loop and one `while` loop.
function getOddNumbers(){
  let iteration = 2;
  let myArr = [...Array(10).keys()];;
while(iteration !== 0) {
    for (x in myArr){
      if (x%2 === 0) console.log(x);
    }
    iteration = iteration - 1;
  }
};
// getOddNumbers()

//String and Arrays
/** 5. Write a function that truncates a string to a specified length.
 * The function will take 2 arguments: a string and a number (desired length).
 * Return the truncated string with '...' appended to the end or the original string,
 * if it wasn't longer than the desired length.
 */

function truncate(myString, length){

  newString = myString.substring(0, length);
  return(newString + "...");

}
// console.log(truncate("Hello I am Rania!", 10));

/** 6. Write a function that returns an array of n last elements from a given array.
*  Example:
*  input: [1, 2, 3], 2
*  output: [2,3]
*/
// The slice() method selects from a given start, up to a (not inclusive) given end.
// slice: A negative index can be used, indicating an offset from the end of the sequence.
// slice(-2) extracts the last two elements in the sequence.
function splitArray(myString, n){
  return(myString.slice(-n))
}
console.log(splitArray("AllWomen", 2));
