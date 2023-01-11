
//Exercise 1
//Write class Circle.
//make the property pi and method calculateArea accessible using the class name and not dot notation.

class Circles {
    static pi: number = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius; //or Circle.pi
    }
}
Circles.pi; // returns 3.14
Circles.calculateArea(5); // returns 78.5
let c1 = new Circles();
//c1.pi; // => Error
//c1.calculateArea(4);// => Error



//Exercise 2
//Considering class Student, write the interface Student.

interface Student1{

  name: string;
  id: number;
  age: number;
  email?: string;
  studentType: string;
  isRegistered: boolean;
  registrationDate: Date;
  getInformation: () => string;
  getRegistrationData: (stype?) => object;

}

class Student implements Student1 {

  name: string;
  id: number;
  age: number;
  email?: string;
  private password: string;
  studentType: string;
  isRegistered: boolean;
  registrationDate: Date;

  constructor (name:string, ID: number){
    this.name = name;
    this.id = ID;
  }

  set setPassword(password: string){
    this.password = password;
  }
  get getPassword(): string{
    return this.password;
  }
  getInformation(): string {
    return `${this.name} has ${this.age} years old.`;
  }
  getRegistrationData(stype?): object{
    if (stype)
      return {"status": this.isRegistered, "Date":this.registrationDate};
    return {};
  }

}





//Exercise 3
//create a class called RequestBuilder. This class receives url, API method and Data
// and send an HTTP request. Data is optional

//let requestBuilder = new RequestBuilder("https://openweather.org", "get");
//make the class as secure as possible.




//Exercise 4
//Create an interface called Animal. This interface has 2 method signatures called "eat" and "sleep".
//eat function prints the food of the animal, and sleep prints number of hours it sleeps.
//Write class Cat which implements Animal.

interface Animal{
  eat(food: string): void;
  sleep(hours: number): void;
}

class Cat implements Animal {
  eat(food:string){
    console.log(`the cat eats ${food}`);

  }
  sleep(hours: number): void {
      console.log(`slept for ${hours} hours.`);
  }

}

//Exercise 5

//Create an interface for AW courses. Each course has title, description, instructor, start date,
//end date, and names of students.
//Then define a class called AWCourse which implements the interface

//Exercise 6
// When you mark a class' constructor as `private`, that means you can't instantiate or
//extend the class. What happens when you mark it as `protected` instead?
//Play around with this in your code editor, and see if you can figure it out.





// Exercise 7
//Extend the Factory Pattern implementation developed below to make it
// safer, at the expense of breaking the abstraction a bit.

// Update the implementation so that a consumer knows at compile time that calling
// Shoe.create('boot') returns a Boot, and Shoe.create('balletFlat') returns a
// BalletFlat (rather than both returning a Shoe). (type of returned value is known)
// Hint: Think back to [function-overloads].

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

// let Shoe = {
//   create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
//       switch (type) {
//         case 'balletFlat': return new BalletFlat();
//         case 'boot': return new Boot();
//         case 'sneaker': return new Sneaker();
//       } }
//     }

  type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat;
    create(type: 'boot'): Boot;
    create(type: 'sneaker'): Sneaker;
  }

  let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat': return new BalletFlat
        case 'boot': return new Boot()
        case 'sneaker': return new Sneaker()
      } }
    }
console.log(Shoe.create('balletFlat'));// BalletFlat
console.log(Shoe.create('boot'));// Boot
console.log(Shoe.create('sneaker'));// Sneaker

//Exercise 8
//Write the parent class "Shape" with a method called getArea.
//Define two child classes for it: "Rectangle" and "Circle".
//Re-write getArea for each child class.

class Shape{
  getArea(){
    return;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number){
    super();
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height;

  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number){
    console.log("!!!");

    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius* this.radius;

  }
}

const circle = new Circle(2);
const rectangle = new Rectangle(5, 6);

circle.getArea(); //=>4 * pi
rectangle.getArea(); //=> 30
