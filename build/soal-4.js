"use strict";
class Circle {
    radius = 10;
    setter() {
        this.radius % 10;
    }
    getter() {
        this.radius / 2;
    }
}
const jmlCircle = new Circle().getter();
console.log(jmlCircle);
