"use strict";
class person {
    name = "jons";
    age = 30;
    gender = "male";
}
class person2 extends person {
    nama;
    introduce() {
        console.log(`hi my name ${this.nama} i am ${this.age} year old, i am identy as ${this.gender}  `);
    }
}
console.log(new person2().introduce());
