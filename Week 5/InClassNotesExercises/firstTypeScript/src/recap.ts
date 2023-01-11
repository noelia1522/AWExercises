

class User {
  //  lName:string;
  // fName: string;

  // constructor(lName:string, fName:string){

  //   this.lName = lName;
  //   this.fName = fName;
  // }

  constructor( public lName: string,  public fName:string) {
    console.log("I am parent");
  };

  getFullName(): string {
    return this.fName + " " + this.lName;

  }
}
// let user = new User("Amini", "Mahsa");
// console.log(user.getFullName());

class Student extends User {
  //readonly properties can onlu be initialized when declared or inside the constructor
  readonly role: string;
  constructor(lName: string,  fName:string, public classGrade:string){
    super(lName, fName);
    console.log("I am child");
    // this.role = newRole;

  }
  getClassGrade(){
    console.log(this.classGrade);
  }

  // changeRole(newRole:string){
  //   this.role = "teacher";
  // }
}

let student1:Student = new Student("Mana","Rick", "5");

student1.getClassGrade();
let m = student1.role;
console.log(student1.role);
