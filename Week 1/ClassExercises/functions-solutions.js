//Exercise 1
function getClassSize(...names){
  return names.length;
}

// console.log(getClassSize('Amy', 'Carolina', 'Marc', 'Peter', 'Maria'));

//Exercise 2

function getLastParam(...params){
  return params.pop();
}
console.log(getLastParam('hello', 23, true, 'hey'));

//Exercise 3
function writeNumberOfPets(kidName, ...pets){
  console.log( `${kidName} has ${pets.length} pets.`);
  return;

}
writeNumberOfPets('Sam', 'Lola', 'Bella', 'Cooper') // Prints "Sam has 3 pets."

//Exercise 4

function printGreeting(user1 = "User", ...manyMoreNames){
  if(manyMoreNames.length > 3){console.log("Too many names!"); return;}
  console.log(`Hello ${user1} ${manyMoreNames.join(" ")}`);

}

printGreeting('Sarah', 'Jessica', 'Parker');
printGreeting('');
printGreeting();
printGreeting('Sarah', 'Jessica', 'Parker', 'Maria', 'John');
