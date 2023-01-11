function printGreeting(name1 = "User", ...manyMoreArgs) {
  if(manyMoreArgs.length>4) { console.log("too many names"); return; }
  console.log(`Hello ${name1} ${manyMoreArgs.join(" ")}`);
}


printGreeting('Sarah', 'Jessica', 'Parker');
printGreeting('');
printGreeting(null);
printGreeting();
printGreeting('Sarah', 'Jessica', 'Parker', 'Maria', 'John');

// function valueToArray(value) {
//   return
//     [value]
// }

// console.log(valueToArray(4));
