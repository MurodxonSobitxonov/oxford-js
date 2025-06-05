// let number = prompt("Iltimos, son kiriting:");

// if (number) {
//     if (number % 2) {
//         console.log("Bu son juft son = ", number);
//     } else {
//         console.log("Bu son toq son = ", number);
//     }
// }

// let yosh = prompt("yil kiriting");
// let yil = 2025;
// let yoshlar = yil - yosh;

// console.log(`Sizning yoshingiz ${yoshlar} da`);

// let age = Number(prompt("yilingizni kiriting"));
//     let Year = 2025;
//     age = Year - age;
//     console.log(`Sizning yoshingiz ${age} da`);
    
//     if (age >= 2 && age <= 6) {
//         console.log("siz boqchada o'qiysiz");
//     }
//     else if (age >= 7 && age <= 18) {
//         console.log("siz maktabda o'qiysiz");
//     }

//     else if (age >= 19 && age <= 30) {
//         console.log("siz universitetda o'qiysiz");
//     }

//     else if (age >= 31 && age <= 60) {
//         console.log("siz Ishlaysiz");
//     }
//     else if (age >= 61) {
//         console.log("siz Nafaqadasiz");
//     }

//     else {
//         console.log("siz xato yosh talladingiz ");
//     }

let a = 9
    b = 3
c = 2;
    
let max;
let min;

if (a > b && a > c) {
    console.log(a, "katta");
    max = a;
}
else if (b > a && b > c) {
    console.log(b, "katta");
    max = b;
}
else if (c > a && c > b) {
    console.log(c, "katta");
    max = c;
}

//____________________________________

if (a < b && a < c) {
    console.log(a, "kichik");
    min = a;
}
else if (b < a && b < c) {
    console.log(b, "kichik");
    min = b;
}
else if (c < a && c < b) {
    console.log(c, "kichik");
    min = c;
}

console.log(max, min);
console.log("Max va Min sonlar farqi:", max-min);
