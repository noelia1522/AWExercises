// recursion
let newString ="";
let counter = 0;

function forLoopChar(char) {
  for(let i= 0; i <5; i++)
    newString+=char;

  return newString;

}

// console.log(forLoopChar("a"));

function recursiveCharacter(char) {
  if(counter>=5)
    return newString;

  counter++;
  newString = char + recursiveCharacter(char);
  return newString;

}

console.log(recursiveCharacter("a"));

// //factoria
function getFactorial(num) {
  if (num === 1)
    return 1;
  else{return num * getFactorial(num - 1);}

}
// // getFactorial(3) //3*2*1
// // getFactorial(n) = n * getFactorial(n - 1)

console.log(getFactorial(3));

function sum(n) {
  if (n <= 1) return n;

  return n + sum(n-1);

}
console.log(sum(5));

//sum(3) = 3 + 2+ 1
//sum(n) = n + sum(n-1);

//sum(5)
//5 + sum(4)
//5 + 4 + sum(3)
//5 + 4 + 3 + sum(2)
//5 + 4 + 3 + 2 + sum(1)
//5 + 4 + 3 + 2 + 1

// // Number exponent (power)
// // pow(2,2) = 4
function pow(number, power) {
  if(power === 1)
    return number;

  return number * pow(number, power-1)

}
console.log(pow(2,4));

//2^4 = 2 * 2^3 //2 * 8 = 16
//2^3 = 2 * 2^2 //2 * 4 = 8
//2^2 = 2 * 2^1 //2 * 2 = 4
//2^1 = 2 * 1   //2


// // give this to Kevin

function giveThisToKevin(array) {
  if(array[0] === "Kevin")
    return "Kevin is safe";
  else if (array.length <= 0 )
    return "KEEEEEEEVIN";
 let person = array.shift(1);
 console.log(person + " says have you seen Kevin?");
 return giveThisToKevin(array);
}
// giveThisToKevin(['mom', 'dad', 'uncle', 'aunt', 'brother 1', 'brother 2', 'sister 1', 'sister2'])	// KEEEEEEVIN!
// giveThisToKevin(['mom', 'dad', 'uncle', 'aunt', 'brother 1', 'brother 2', 'sister 1', 'sister2', 'Kevin', 'brother3']]) // 'Kevin is safe'


function pairCoders(array) {
  let l = array.length;
  if(l>0){
    let coder1 = getRandomInt(l);
    let coder2 = getRandomInt(l);

  }
  if(coder1 != coder2){
    console.log("mm");
    const index1 = array.indexOf(coder1);
    const index2 = array.indexOf(coder2);
    array.splice(index1, 1);
    array.splice(index2, 1)

  }

  pairCoders(array);

}
