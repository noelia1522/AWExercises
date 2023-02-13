const {sum, handler} = require('./sum')
test('properly adds two numbers ', ()=> {

  // if(sum(1,2)=== 3){
  //   console.log("pass");
  // }
  // else{
  //   console.log("Failed!");
  // }
  expect(sum(1,2)).toBe(3);
  expect(handler()).toBe("Hello!")
})
