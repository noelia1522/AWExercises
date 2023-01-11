# JS Scope

1. What’s the result of executing this code and why.
  ```
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

2. What is result?
  ```
  var a = 1; 
  
  function someFunction(number) {
    a = 5;
  }
  
  console.log(a)
  ```

3. What will you see in the console for the following example?
  ```
  var person = 'Hermione'; 
  function b() { 
      person =  'Luna'; 
  } 
  b(); 
  console.log(person);    
  ```

4. What's the result?
```
let text = 'outside';
function logIt(){
    console.log(text);
    let text = 'inside';
};
logIt();
```

6. What will you see in the console for the following example?
  ```
  var person = {name: 'Hermione'}; 
  function b() { 
      person =  {name: 'Luna'}; 
  } 
  b(); 
  console.log(person);    
  ```

6. What will you see in the console for the following example?
  ```
  var person = {name: 'Hermione'}; 
  function b() { 
      person =  {name: 'Luna'}; 
      return
      function person(){}
  } 
  b(); 
  console.log(person);    
  ```


7. Will the function be properly run?
   

```
someFunction(); // function call

function someFunction() { console.log('hi')};
```