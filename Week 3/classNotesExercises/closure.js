let counter1 = 0;
let counter2 = 0;
function incrementCounter (counter){
return counter +=1;
}


// // Problems here:
// // If I write the function like that
// // I cannot increment the value of global function counter1
//// eachtime I call incrementCounter(counter1)
//console.log(incrementCounter(counter1));  //1 //they are independent
//console.log(incrementCounter(counter1));  //1 //counter is reset each time. because
                                              //icrementCounter gets the parameter "number"
//console.log(incrementCounter(counter2));  //1

// //If I delete parameter and write the function like below,
// // now the glabal variable counter1 is incremented each time we call the function
// // but we cannot have a incrementCounter function for another variable like counter2
function incrementCounter2 (){

return counter1 +=1;
}

//console.log(incrementCounter(counter1));  //1
//console.log(incrementCounter(counter1));  //2

//console.log(incrementCounter(counter2));  //0  //nothing happens on counter2

// what should we do to have both?
// -------Closure--------

function outer (inc){
  let counter = 0;
  function incrementCounter (){ //this function holds the bind/link to other variables

     counter = counter+inc;                 // inside the outer function. This is closure
     console.log(counter);                  //(this binding of function with variables at the moment of creation )

  }
  return incrementCounter;     // in normal case (no closure) everythings would remove when reach to return
}                              // now with closure, "counter" inside the incrementCounter function is persisted
                               // because we have it in the outer fucntion

const counterFn = outer(1);
counterFn();
counterFn();

const counterFn2 = outer(5);
counterFn2();
counterFn2();

//-----------------------//
