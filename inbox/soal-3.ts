
// SOAL N0. 3
// A
class Animal {
    nama : string = "singa";
    age : number = 27;
    isMammal : boolean = true;
    // constructor(nama: string, age: number, isMammal: boolean) {
    //     this.nama = nama;
    //     this.age = age;
    //     this.isMammal = isMammal;
    // }
}
// B
class Rabbit extends Animal {
    eat () {
        console.log(`hello ${this.nama} dengan nilai ${this.isMammal}`);
        
    }
}
const hasil = new Rabbit().eat();
// C
class Eagle extends Animal {
    isMammal: boolean = false
    fly () {
        console.log(`hello ${this.nama} dengan nilai ${this.isMammal}`);
        
    }
}
const hasil2 = new Eagle().fly();
// D
class myRabbit extends Rabbit {
    name : string = "labi";
    age : number = 2;
    constructor(name: string, age: number) {
        super();
        
    }
}
// E
class myEagle extends Eagle {
    name : string = "Elo";
    age : number = 4;
    constructor(name: string, age: number) {
        super()
    }
}