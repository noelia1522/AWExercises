const isUpperCase = require("./isUpperCase");

describe("test isUpperCase function", ()=>{

  it("The string HELLO WORLD should return true", ()=>{
    const result = isUpperCase("HELLO WORLD")
    expect(result).toBe(true);
    // const output = isUpperCase(123)
    // expect(output).toBeFalsy()
  });
  it("The string Hello world should return false", ()=>{
    const result = isUpperCase("Hello world")
    expect(result).toBe(false);
  });
  it("The string hello world should return false", ()=>{
    const result = isUpperCase("hello world")
    expect(result).toBe(false);
  });
  it("Any input of any type other than string should retun false", ()=>{
    const result1 = isUpperCase(123)
    expect(result1).toBe(false);

    const result2 = isUpperCase(true)
    expect(result2).toBe(false);

    const result3 = isUpperCase({"input": "hello"})
    expect(result3).toBe(false);

    // const result4 = isUpperCase("")
    // expect(result4).toBe(false);
  })

  it("check the errors", ()=>{
    expect(()=>{
      isUpperCase("")
    }).toThrow("You entered an empty string!")
  })
})
