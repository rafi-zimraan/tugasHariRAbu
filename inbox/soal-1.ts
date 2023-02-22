// SOAL NO. 1
class person  {
    name : any = "jons";
    age :number = 30;
    gender : string = "male";
}
class person2 extends person {
    nama: any;
    introduce () {
        console.log(`hi my name ${this.nama} i am ${this.age} year old, i am identy as ${this.gender}  `);

    }
}
console.log(new person2().introduce());
