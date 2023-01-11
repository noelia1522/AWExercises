"use strict";
class User {
    //  lName:string;
    // fName: string;
    // constructor(lName:string, fName:string){
    //   this.lName = lName;
    //   this.fName = fName;
    // }
    constructor(lName, fName) {
        this.lName = lName;
        this.fName = fName;
        console.log("I am parent");
    }
    ;
    getFullName() {
        return this.fName + " " + this.lName;
    }
}
// let user = new User("Amini", "Mahsa");
// console.log(user.getFullName());
class Student extends User {
    constructor(lName, fName, classGrade) {
        super(lName, fName);
        this.classGrade = classGrade;
        console.log("I am child");
        // this.role = newRole;
    }
    getClassGrade() {
        console.log(this.classGrade);
    }
}
let student1 = new Student("Mana", "Rick", "5");
student1.getClassGrade();
let m = student1.role;
console.log(student1.role);
//# sourceMappingURL=recap.js.map