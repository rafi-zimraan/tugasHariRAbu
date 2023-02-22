// SYNCHRONONS
const number = 1; 
setTimeout(function () {
    console.log("hello");
})
console.log(number);

// ASYNCHRONOUS
let a = 2;
fetch("/"),function(){
    console.log("loaded page");
}
