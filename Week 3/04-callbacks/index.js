// To run this file, open the terminal and type node index.js from the containing folder
console.log('Hello, world!');


/* 
 ******* Challenge 1 ********
 */
function addOne(num) {
  
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addOne(2));
// console.log(addOne(100));



/* 
 ******* Challenge 2 ********
 */
function addS(word) {

}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


/* 
 ******* Challenge 3 ********
 */

function map(array, callback) {

}

// console.log(map([1, 2, 3], addOne));


/* 
 ******* Challenge 4 ********
 */
function forEach(array, callback) {

}

// see for yourself if your forEach works! How would you test it?

/* 
 ******* Challenge 5 ********
 * In the first part of this challenge, you're going to rebuild map as mapWith. 
 * This time you're going to use forEach inside of mapWith instead of using a for loop.
 */

function mapWith(array, callback) {

}


/* 
 ******* Challenge 6 ********
 */
function reduce(array, callback, initialValue) {

}


// Challenge 7
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {

}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']