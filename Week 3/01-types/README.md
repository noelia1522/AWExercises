## Challenge 1

For each expression, predict what you think the output will be in a comment (`//`) **_without first running the command_**. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof "potato";
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below? Firstly fill the file with your prediction. Later, run the index.js file and fill the 'Actual'

```js
typeof 15;
// Prediction:
// Actual:

typeof 5.5;
// Prediction:
// Actual:

typeof NaN;
// Prediction:
// Actual:

typeof "hello";
// Prediction:
// Actual:

typeof true;
// Prediction:
// Actual:

typeof 1 != 2;
// Prediction:
// Actual:

"hamburger" + "s";
// Prediction:
// Actual:

"hamburgers" - "s";
// Prediction:
// Actual:

"1" + "3";
// Prediction:
// Actual:

"1" - "3";
// Prediction:
// Actual:

"johnny" + 5;
// Prediction:
// Actual:

"johnny" - 5;
// Prediction:
// Actual:

99 * "luftbaloons";
// Prediction:
// Actual:
```

What's going on in the second half of the previous question? Are there any "rules" we can pull from those examples?

## Challenge 2: checking equality

Predict which of these will be console logged

```javascript
if ([]) {
  console.log("empty array is truthy");
}
if ([1, 2, 3]) {
  console.log("non-empty array is truthy");
}

if ({}) {
  console.log("empty object is truthy");
}

if ({ a: "1" }) {
  console.log("non-empty object is truthy");
}
if (null) {
  console.log("null is truthy");
}

if (false) {
  console.log("false is truthy");
}

if (NaN) {
  console.log("NaN is truthy");
}

if ("") {
  console.log("empty string is truthy");
}

if ([] === true) {
  console.log("empty array equals to true");
}
// bonus
if (!![] === true) {
  console.log("double negated empty array equals true");
}
```
