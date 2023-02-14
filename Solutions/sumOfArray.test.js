const sumArray = require('./sumOfArray')

describe("testing sumArray function", () => {

test( "empty array should give 0", () => {
    expect(sumArray([])).toBe(0);
});

test( "add all elements of an input array", () => {
    expect(sumArray([1,2,3])).toBe(6);
});

test( "array with one element should return the same element", () => {
    expect(sumArray([10])).toBe(10);
});

test( "input is a string, should return undefined", () => {
    expect(sumArray(["anna"])).toBe(NaN);
});

})
