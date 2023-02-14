const letterCount = require('./letterCount');


test('returns object from string by counting letters', () => {
  expect(letterCount("h")).toStrictEqual({h:1});
  expect(letterCount("hello")).toStrictEqual({h:1, e:1, l:2, o:1});
  expect(letterCount("eeeee")).toStrictEqual({e:5});
  expect(letterCount("")).toStrictEqual({});
  expect(letterCount("hello world")).toStrictEqual({h:1, e:1, l:3, o:2, w:1, r:1, d:1});
  expect(letterCount(1)).toStrictEqual({});
});
