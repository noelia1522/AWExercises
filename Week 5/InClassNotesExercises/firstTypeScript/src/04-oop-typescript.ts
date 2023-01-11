
// //Exercise 1
// //Write class Circle.
// //make the property pi and method calculateArea accessible using the class name and not dot notation.


// class Circles {
//     static pi: number = 3.14;

//     static calculateArea(radius:number) {
//         return this.pi * radius * radius; //or Circle.pi
//     }
// }
// Circles.pi; // returns 3.14
// Circles.calculateArea(5); // returns 78.5

// //Exercise 2
// //Considering class Student, write the interface Student.

// class Student implements Student {

//   name: string;
//   id: number;
//   age: number;
//   email?: string;
//   private password: string;
//   studentType: string;
//   isRegistered: boolean;
//   registrationDate: Date;

//   constructor (name:string, ID: number){
//     this.name = name;
//     this.id = ID;
//   }

//   set setPassword(password: string){
//     this.password = password;
//   }
//   get getPassword(): string{
//     return this.password;
//   }
//   getInformation(): string {
//     return `${this.name} has ${this.age} years old.`;
//   }
//   getRegistrationData(stype?): object{
//     if (stype)
//       return {"status": this.isRegistered, "Date":this.registrationDate};
//     return {};
//   }

// }

// interface Student1 {

//   name: string;
//   id: number;
//   age: number;
//   email?: string;
// //Interfaces define "public" contracts and as such it doesn't make sense to have protected or private access modifier on interfaces, which are more of a, let's call it, implementation detail.
//   //password: string;
//   getInformation:() => string;
//   // getRegistrationData(stype?: string)=> object;
// }
// //Exercise 3
// //create a class called RequestBuilder. This class receives url, API method and Data
// // and send an HTTP request. Data is optional

// //let requestBuilder = new RequestBuilder("https://openweather.org", "get");
// //make the class as secure as possible.

// class RequestBuilder {
// private data: object | null = null;
// private method: 'get' | 'post' | null = null;
// private url: string | null = null;

//   setMethod(method: 'get' | 'post'): this {
//   this.method = method
//     return this
//       }
//         setData(data: object): this {
//         this.data = data
//         return this
//       }
//   setURL(url: string): this
//       { this.url = url
//       return this
//       }
//   send() {
// // ...
// }
// }


// //Exercise 4 - Interface
// //Create an interface called Animal. This interface has 2 method signatures called "eat" and "sleep".
// //eat function prints the food of the animal, and sleep prints number of hours it sleeps.
// //Write class Cat which implements Animal.


// interface Animal1
//   {
//     eat(food: string): void
//     sleep(hours: number): void
//   }

// class Cat1 implements Animal1
//   {
//     eat(food: string) {
//     console.info('Ate some', food, '. Mmm!')
//   }
//     sleep(hours: number) {
//     console.info('Slept for', hours, 'hours')
// } }



// //Exercise 5- Interface

// //Create an interface for AW courses. Each course has title, description, instructor, start date,
// //end date, and names of students.
// //Then define a class called AWCourse which implements the interface


// // When you mark a class' constructor as `private`, that means you can't instantiate or
// //extend the class. What happens when you mark it as `protected` instead?
// //Play around with this in your code editor, and see if you can figure it out.

// // class AA {
// //   protected constructor() {}
// // }

// // class BB extends AA {} // ok
// // new AA() // error
// // new BB() // error

// /* Unlike a class with a private constructor, a class with a protected constructor
// can be extended. Neither a class with a private constructor nor a class with a protected
// constructor can be new-ed. */



// // Exercise 6
// //Extend the Factory Pattern implementation developed beloww to make it
// // safer, at the expense of breaking the abstraction a bit.

// // Update the implementation so that a consumer knows at compile time that calling
// // Shoe.create('boot') returns a Boot, and Shoe.create('balletFlat') returns a
// // BalletFlat (rather than both returning a Shoe). (type of returned value is known)
// // Hint: Think back to [function-overloads].

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
//         case 'balletFlat': return new BalletFlat
//         case 'boot': return new Boot
//         case 'sneaker': return new Sneaker
//       } }
//     }

//..................Solution
type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
}

//Solution
let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot()
      case 'sneaker':
        return new Sneaker()
    }
  }
}

//  Shoe.create('balletFlat') // BalletFlat
//  Shoe.create('boot') // Boot
//  Shoe.create('sneaker') // Sneaker

 console.log(Shoe.create('balletFlat'));
 console.log(Shoe.create('boot'));
 console.log(Shoe.create('sneaker'));
