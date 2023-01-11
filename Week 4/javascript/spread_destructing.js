/** 1. Write a function that can be called with any number of parameters. The first parameter should always be a name of the student, the rest of parameters represent this person's grades. The function console.logs the following phrase with the highest of the grades:
 * "Y's highest grade is x"
 * 
 * Example:
 * getHighestGrade(Anne, 3, 5, 6, 4) // logs "Anne's highest grade is 6"
 * 
 * Tip: use rest parameters, spread operator and Math.max.
 */

/** 2. Write a function that will receive an object containing another object called "data" as an argument. Function needs to return a deep copy of the passed object, with nested "data" object being a deep copy as well. We don't know anything about other properties of passed object or contents of "data" object - only that they are all primitives.
 * 
 * Example:
 * copyDeep({
 *  name: 'Lucy',
 *  data: {
 *    age: 22,
 *    height: 175,
 *    profession: 'programmer',
 *  }
 * })
 * 
 * Tip: use spread operator to make copies.
 */

/** 3. Write a function that accepts an object containing width and height, among other properties. Return an object that only contains width and height, width width renamed to w, and height renamed to h. Use zero as a default value for both properties, in case they were not defined.
 * 
 * Example:
 * getDimensions({
 *  width: 230,
 *  color: 'red',
 *  tag: 'div',
 * }) // returns { w: 230, h: 0 }
 */

/** 4. Write a function that given 2 arrays, returns these 2 arrays merged, but without second element of the first array.
 * Example:
 * mergeArraysSkipSecondElement([1, 2, 3], [4, 5, 6]) // returns [1, 3, 4, 5, 6]
 */
