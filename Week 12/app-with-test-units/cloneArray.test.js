const cloneArray = require('./cloneArray');

test('properly clones array', ()=>{
  const array = [1,2,3,4];
  expect(cloneArray(array)).toEqual(array); // check equality by value. not by refernce
  expect(cloneArray(array)).not.toBe(array);
})
