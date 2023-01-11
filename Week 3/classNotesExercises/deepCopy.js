
//OBJECT Deep copy in JS using
// JSON.parse and JSON.stringify

const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    surname : {
      firstSurname: "Gomez",
      SecondSurname: "Perez"
    },
    incrementAge: function() {
      this.age++;
    }
}

let clone = JSON.parse(JSON.stringify(user))

console.log(user)
console.log(clone)


clone.age = 32;
clone.surname.SecondSurname = "Doncel";

console.log(user)
console.log(clone)
