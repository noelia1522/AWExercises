// // let a= true;
// // var b = false;
// // const c = true;
// // let d: boolean = true;
// // let e: true = true;
// // // // let f: true = false;
// // // console.log(typeof(c));
// // // console.log("Hello");

// // let g = 1;
// // let h = "3";
// // let c = {
// //   apple:"a",
// //   banana:b
// // }
// // let i = g*h;

// // // console.log(d);
// // const loggedInUsername: string;

// // const users = [
// //   { name: "Oby", age: 12 },
// //   { name: "Heera", age: 32 },
// // ];

// // const loggedInUser = users.find((u) => u.name === loggedInUsername);
// // //Error
// // console.log(loggedInUser.age);

// let a = 1042;
// let m: bigint = 1234n ;
// let b = "apples and oranges";
// const c = "pineapples";
// let isValid = true;
// let d = [true, true, false];
// let e = {type: "ficus"};
// let f = [1, false];
// const g = [3];
// // /*----------------------------------*/
// let i:number = 3;
// i = 4;
// // Error TS2322: Type '4' is not assignable to type '3'.

// let j=[1,2,3]
// j.push(4)
// j.push('5')
// // Error TS2345: Argument of type '"5"' is not
// // assignable to parameter of type 'number'.

// let k: never = 4
// // Error TSTS2322: Type '4' is not assignable // to type 'never'.

// let l: unknown = 4
// l == 123;
// if (typeof l === 'number'){
//   let m = l * 2 // Error TS2571: Object is of type 'unknown'.
// }
// // /*--------------------------------*/

// // // type any
// // //https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// // let obj: any = { x: 0 };
// // // None of the following lines of code will throw compiler errors.
// // // Using `any` disables all further type checking, and it is assumed
// // // you know the environment better than TypeScript.
// // obj.foo();
// // obj();
// // obj.bar = 100;
// // obj = "hello";
// // const n: number = obj;

// // let messageElement: number | string;

// // if(typeof(messageElement) === "string"){
// //   console.log(messageElement);

// // }

// // let a = 1 / [2];
// // let b = a + 3;
// // let c = {
// //   apple: a,
// //   banana: b
// // }
// // let d = c.apple * 4;
// // console.log(d);

// // let num: number = 3;
// // let str:string = "Hi!";

// // let result = str + 3;
// // console.log(result);

// // enum myList {
// //   list1,
// //   list2,
// //   list3 = 4,
// //   list5
// // }
// // console.log(myList.list5);
console.log("you are in index");
