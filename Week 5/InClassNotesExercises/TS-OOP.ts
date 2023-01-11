
//Polymorphism
class Shape {
    //this function will be implemented in each subclass
    area() {
        return 0;
    }
}

class Circle extends Shape {
    radius:number;
    constructor (radius:number) {
        super();
        this.radius = radius;
    }
    //area of circle
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor (width:number, height:number) {
        super();
        this.width = width;
        this.height = height;
    }
    //area of rectangle
    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(5, 6);

console.log(circle.area());
console.log(rectangle.area());


//some examples of classes in Typescript

class Person  {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person{
    empCode: number;
    private empSalary: number;
    //It is not necessary for a class to have a constructor.
    constructor(code: number, name: string) {
        super(name);
        this.empCode = code;
    }

    set setSalary(salary: number){
      this.empSalary = salary;

    }
    get getSalary(){
      return this.empSalary;
    }
    setSalary2(num: number) {
      this.empSalary = num;
        // return 10000;
    }
}


let emp = new Employee(100,"Steve");

//access modifiers

class Animal {
    private name: string;
    private age: number;

    // protected name: string;
    // protected age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
        this.name = name;
    }
}

const CAT = new Cat('Cosmo', 8)
console.log(CAT.name) //Property 'name' is protected and only accessible within class 'Animal' and its subclasses.


//Interfaces
// When you use classes, you will often find yourself using them with interfaces.
// Like type aliases, interfaces are a way to name a type so you don’t have to define it
//inline. Type aliases and interfaces are mostly two syntaxes for the same thing
//(like function expressions and function declarations), but there are a few small differences.

type Sushi =
{ calories: number
  salty: boolean
  tasty: boolean
}
//It’s easy to rewrite it as an interface:
interface Sushi
{ calories: number
  salty: boolean
  tasty: boolean
}

// What’s the difference between a class and an interface?

/* A class can have implementations, initialized class fields, and visibility modifiers.
It also generates JavaScript code, so it supports instanceof checks at runtime.
A class defines both a type and a value. An interface just defines a type, doesn't generate
any JavaScript code, can only contain type-level members, and can't contain use modifiers. */

//Differences between type and interface:

//there is no way to rewrite the following type aliases as interfaces.
//interfaces don't support type expressions on their right handside
type C = number
type D = C|string

//2.when you extend an interface, TypeScript will make sure that the interface you’re
//extending is assignable to your extension. For example:
interface A {
  good(x: number): string
  bad(x: number): string
}
interface B extends A {
  good(x: string | number): string
  bad(x: string): string // Error TS2430: Interface 'B' incorrectly extends
} // interface 'A'. Type 'number' is not assignable

//Declaration Merging
interface User{
    name:string
}
interface User{
    age:number
}
let aa : User ={
    name: "Jack",
    // age: 30
}

// type Users ={
//     name: string
// }
// type Users ={
//     age:number
// }

//..... Interface example
interface IPerson {
   firstName:string,
   lastName:string,
   sayHi: ()=>string
}

var customer:IPerson = {
   firstName:"Tom",
   lastName:"Hanks",
   sayHi: ():string =>{return "Hi there"}
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee:IPerson = {
   firstName:"Jim",
   lastName:"Blakes",
   sayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);

//Static and non-static methods.

class Circle {
    static pi = 3.14;
    pi = 3;
}

Circle.pi; // returns 3.14

let circlesObj = new Circle();
circlesObj.pi; // returns 3
////////////////////////////////////////
class Circle1 {
    static pi = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number {
        return 2 * Circle1.pi * radius;
    }
}

Circle1.calculateArea(5); // returns 78.5

let circleObj = new Circle1();
circleObj.calculateCircumference(5) // returns 31.4000000
//  .calculateArea(); <-- cannot call this

///Abstract classes
// https://www.tutorialsteacher.com/typescript/abstract-class


// type Student ={name: string, age: number }
