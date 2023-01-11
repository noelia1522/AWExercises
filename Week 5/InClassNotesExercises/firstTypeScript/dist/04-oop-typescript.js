"use strict";
// //Exercise 1
// //Write class Circle.
// //make the property pi and method calculateArea accessible using the class name and not dot notation.
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
//Solution
let Shoe = {
    create(type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
        }
    }
};
//  Shoe.create('balletFlat') // BalletFlat
//  Shoe.create('boot') // Boot
//  Shoe.create('sneaker') // Sneaker
console.log(Shoe.create('balletFlat'));
console.log(Shoe.create('boot'));
console.log(Shoe.create('sneaker'));
//# sourceMappingURL=04-oop-typescript.js.map