// // // // Overload signatures
// // // function greet(person: string): string;
// // // function greet(persons: string[]): string[];

// // // // Implementation signature
// // // function greet(person: string|string[]): string|string[]{
// // //   if (typeof person === 'string') {
// // //     return `Hello, ${person}!`;
// // //   } else if (Array.isArray(person)) {
// // //     return person.map(name => `Hello, ${name}!`);
// // //   }
// // //   throw new Error('Unable to greet');
// // // }


// // // console.log(greet('World'));
// // //          // 'Hello, World!'
// // // console.log(greet(['Jane', 'Joe']));

// // //some examples of classes in Typescript

// // class Person  {
// //     name: string;

// //     constructor(name: string) {
// //         this.name = name;
// //     }
// // }

// // class Employee extends Person{
// //     empCode: number;
// //     private empSalary: number;
// //     //It is not necessary for a class to have a constructor.
// //     constructor(code: number, name: string) {
// //         super(name);
// //         this.empCode = code;
// //     }

// //     set setSalary(salary: number){
// //       this.empSalary = salary;

// //     }
// //     get getSalary(){
// //       return this.empSalary;
// //     }
// //     setSalary2(num: number) {
// //       this.empSalary = num;
// //         // return 10000;
// //     }
// // }


// // let emp = new Employee(100,"Steve");


// class Animal{
//   name: string;
//   private age: number;

//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
//   get setAge(){
//     return this.age;
//   }
//   set getAge(age:number){
//     this.age = age;
//   }

// }

// class Cat extends Animal {
//   constructor(name:string, age: number){
//     super(name, age);
//   }



// }

// const CAT = new Cat('Jack', 8);
// CAT.name;
// CAT.getAge();
// CAT.setAge(10);
