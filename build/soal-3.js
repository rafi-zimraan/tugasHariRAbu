"use strict";
class Animal {
    nama = "singa";
    age = 27;
    isMammal = true;
}
class Rabbit extends Animal {
    eat() {
        console.log(`hello ${this.nama} dengan nilai ${this.isMammal}`);
    }
}
const hasil = new Rabbit().eat();
class Eagle extends Animal {
    isMammal = false;
    fly() {
        console.log(`hello ${this.nama} dengan nilai ${this.isMammal}`);
    }
}
const hasil2 = new Eagle().fly();
class myRabbit extends Rabbit {
    name = "labi";
    age = 2;
    constructor(name, age) {
        super();
    }
}
class myEagle extends Eagle {
    name = "Elo";
    age = 4;
    constructor(name, age) {
        super();
    }
}
