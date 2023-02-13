const Stack = require('./Stack')
describe("My stack properly simulates an array", ()=> {

  beforeEach(()=>{
    stack= new Stack();
  })

it("stack is created empty", ()=>{
  // const stack = new Stack();
  expect(stack.top).toBe(-1);//if array is empty, return -1
  expect(stack.items).toEqual({});
});

it('an item is pushed to the top of the stack', ()=>{
  // const stack = new Stack();
  stack.push('First!')
  expect(stack.top).toBe(0);
  stack.push('Second!')
  expect(stack.top).toBe(1);
  console.log(stack);
})
it('can pop off an item', ()=>{
  stack.push("First");
  stack.push("second")
  stack.pop();
  expect(stack.top).toBe(0)
  console.log(stack);
})


})
