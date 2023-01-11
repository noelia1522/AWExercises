/** 1. Write a function that given 2 integers, returns the one that is nearest to 100.
 * Don't forget about the case where 2 numbers are equally close to 100 (print a message in this case).*/

/** 2. Rewrite a function below so that it contains only 2 lines of code.
 * The function returns true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
 */

function compare_to_100 (x) {
  if (x > 100) {
    return "greater"
  } else if (x < 100) {
      return "smaller"
  } else {
    return "equal"
  }
}

/** 3. Rewrite the function below so that it only contains one line of code.
 * The function takes a number as a parameter and returns true if it's 18 or greater, and false if it's less than 18.
 */

function legalAge(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

/** 4. Write a function that takes a string as a parameter and returns true if it's empty, and false if it's not empty. A string containing only whitespaces (" ") does not count as empty.
 *
 * Examples:
 * isStringEmpty("") ➞ true
 * isStringEmpt(" ") ➞ false
 * isStringEmpt("a") ➞ false
 */

/** 5. Write a function that accepts language as a parameter and prints a greeting in this language.
 * You can handle as few or as many languages as you want
 * - just make sure to always print a greeting.
 *
 * Example:
 * input: 'English', output: 'Hello!'
*/


/* 6: You're a bouncer at a bar. Given an `age` variable, create a function `greet(age)` with conditional that satisfies the following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.

## Bonus for the first task

Bar patrons must have an ID if the bouncer is even going to consider what age they are.
- If the patron has an ID, the bouncer will then check if they are of the proper age
- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?
*/


const greet = (age) => {

}
// uncomment to check, write other checks yourself!
// console.log(greet(17));     // prints out `"You're too young to be in here!"`
// console.log(greet(75);      // prints out `"Are you sure you want to be here?"`


// 7: loops - Your task is to create a loop that prints out all the odd numbers between 1 and 100...twice! Your solution must use one `for` loop and one `while` loop.


// 8: Fizzbuzz (this is the most popular interview question)
/*
Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
* Counts from 1 to 100 and prints out every number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
*/
