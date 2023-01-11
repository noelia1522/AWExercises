// Author: Rana Saniei
// Date:
//
// Descriptions


//Logical Operators

//OR Operator

01 = true || true     // t || t returns true
02 = false || true    // f || t returns true
03 = false || (3==4)   // t || f returns false
04 = 'Cat' || 'Dog'   // t || t returns 'Cat'
05 = false || 'Cat'   // f || t returns 'Cat'
06 = 'Cat' || false   // t || f returns 'Cat'
07 = '' || false      // f || f returns false
08 = false || ''      // f || f returns ''
08 = false || varObject   // f || object returns object

09 =  false || 'Dog'|| 'Cat'

// AND Operator

01 = true && true     // t && t returns true
02 = false && true    // f && t returns false
03 = false && (3==4)   // f && f returns false
04 = 'Cat' && 'Dog'   // t && t returns 'Dog'
05 = false && 'Cat'   // f && t returns false
06 = 'Cat' && false   // t && f returns false
07 = '' && false      // f && f returns ''
08 = false && ''      // f && f returns false
08 = false && varObject   // f && object returns false

09 =  false && 'Dog'&& 'Cat' //false

let animals = "cat" + "Dog"
let myString = "Cat";
let newString = `${myString} and Dog`;

// Arrays
 let arr = [];
 let arr1 = new Array(2);
 const arr3 = [];
 let arr2 = new Array("apple", "banana", "orange");
 arr1.length = 0;
 let index = arr1.indexOf("apple"); // return 0

 arr2.pop() //return "orange"
 arr2.push("blueberry") // ["apple", "banana", "orange", "blueberry"]

//  Loops
let myArray = [1,4,6,9];
for (let value of myArray){
  console.log(value);
}

for(let key in myArray){
  console.log(myArray[key]);
}

return result;

// function getNames(firstName, ...values)
let options ={
  myName : "Sara",
  myFamilyName : "Smith",
  age : 32
};
const arr5 =["one", "two", "three"];
let [first, , third] = arr5;

// let {item1,, item3} = options;
surname = "eeee"
