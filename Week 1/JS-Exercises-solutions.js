//Conditionals

/** 2. Rewrite a function below so that it contains only 2 lines of code.
 * The function returns true if the given number is 100,
 * the string "greater" if the number is greater than 100 or the string "smaller"
 *  if it's smaller than zero.
 */

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

function compare_to_100(x) {
  if (x !== 100) return (x - 100) > 0 ? "greater" : "less";
  return "equal";

}
console.log(compare_to_100(103));


/** 3. Rewrite the function below so that it only contains one line of code.
 * The function takes a number as a parameter and returns true if it's 18 or greater,
 * and false if it's less than 18.
 */

// function legalAge(age) {
//   if (age >= 18) {
//     return true
//   } else {
//     return false
//   }
// }

function legalAge(age) {
  // return (age - 18 >= 0 ? "true": "false")
  return (age >= 18)
}

// console.log(legalAge(34));

//Strings and arrays

// 7: loops - Your task is to create a loop that prints out all
// the odd numbers between 1 and 100...twice! Your solution must use one
// `for` loop and one `while` loop.

function getOddNumbers() {

  let iteration = 2;
  let myArr = [...Array(20).keys()];
  while(iteration > 0) { //why not !=0
    for (x in myArr){
      if (x%2 === 1) console.log(x);
    }
    iteration = iteration -1;
  }
};
getOddNumbers();

//String and Arrays
/** 5. Write a function that truncates a string to a specified length.
 * The function will take 2 arguments: a string and a number (desired length).
 * Return the truncated string with '...' appended to the end or the original string,
 * if it wasn't longer than the desired length.
 */

function truncateString(myString, length){
  newString = myString.substring(0, length);
  return (newString + "...")
}

console.log(truncateString("AllWomen", 3 ));

/** 6. Write a function that returns an array of n last elements from a given array.
*  Example:
*  input: [1, 2, 3], 2
*  output: [2,3]
*/
// The slice() method selects from a given start, up to a (not inclusive) given end.
// slice: A negative index can be used, indicating an offset from the end of the sequence.
// slice(-2) extracts the last two elements in the sequence.

function splitArray(str, n) {
  return (str.slice(-n));

}
console.log(splitArray([1, 2,3,4, 6], 2));

//Spread- destructuring

/** 3. Write a function that accepts an object containing width and height,
 * among other properties. Return an object that only contains width and height,
 * width width renamed to w, and height renamed to h. Use zero as a default value
 * for both properties, in case they were not defined.
 *
 * Example:
 * getDimensions({
 *  width: 230,
 *  color: 'red',
 *  tag: 'div',
 * }) // returns { w: 230, h: 0 }
 */

function getDimensions(param){

  let {width: w = 0, height: h = 0 } = param;
  return {w,h}

}

console.log(getDimensions({
 width: 230,
 color: 'red',
 tag: 'div',
 })) // returns { w: 230, h: 0 }


 /** 1. Write a function that can be called with any number of parameters.
 * The first parameter should always be a name of the student,
 * the rest of parameters represent this person's grades.
 * The function console.logs the following phrase with the highest of the grades:
 * "Y's highest grade is x"
 *
 * Example:
 * getHighestGrade(Anne, 3, 5, 6, 4) // logs "Anne's highest grade is 6"
 *
 * Tip: use rest parameters, spread operator and Math.max.
 */

function showHighestGrade(name, ...grades){
  let maxGrade = Math.max(...grades);
  console.log(`${name}'s highest grade is ${maxGrade}`);
}

showHighestGrade("Anna", 15, 12, 20, 17)
