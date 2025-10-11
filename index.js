// scopes
var a = "salom";

if (true) {
    var a = "hello";
    console.log(a); // hello
}

console.log(a); // hello

// let
let name = "Jack";

if (true) {
    let name = "John";
    console.log(name); // John
}

console.log(name); // Jack

// Hosting
console.log(a); // undefined
var a = 5;

// IIFE - Immediately Invoked Function Expression
(function salom() {
    console.log("Mening ismim IIFE");
})();

// Cleaner IIFE
(() => {
    console.log("Hi IIFE");
})();

// ARS - Anonymous Function Expression
let salom = function () {
    console.log("salom");
};

// NEW - Named Function Expression
let sum = function myFunc(a, b) {
    return a + b;
};

console.log(sum(5, 6)); // 11

// CLOSURE MISOLI
function tashqi() {
    let yosh = 20;

    function ichki() {
        console.log(`Yosh: ${yosh}`);
    }

    return ichki;
}

let natija = tashqi();
natija(); // Yosh: 20

// New Function
let func = new Function('a', 'b', 'return a + b');
console.log(func(5, 7)); // 12
