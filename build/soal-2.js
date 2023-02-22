"use strict";
class animal {
    name;
    isMammal;
    constructor(name, isMammal) {
        this.name = name;
        this.isMammal = isMammal;
    }
}
class Ape extends animal {
    yell() {
        console.log("Auooo");
    }
}
class Frog extends animal {
    jump() {
        console.log("Hop Hop");
    }
}
const gabung = new Frog("katak", true).jump();
const gabung1 = new Ape("katak", true).yell();
console.log(gabung, gabung1);
