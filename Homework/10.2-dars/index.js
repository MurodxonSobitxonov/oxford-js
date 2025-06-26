// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("Birinchi sonni kiriting:", 0);
//         this.b = +prompt("Ikkinchi sonni kiriting:", 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());

//_____________________________________________________

// let obj = {
//     id: 1,
//     name: "WebBrain"
// };

// console.log(Object.keys(obj)); // ['id', 'name']

// ______________________________________________________

// 2

// let obj = {
//     id: 1,
//     name: "WebBrain"
// };

// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//         console.log(key); // id
//     }
// }

// ______________________________________________________

// 3

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// };

// let res = {};
// for (let key in obj) {
//     if (typeof obj[key] === "boolean") {
//         res[key] = obj[key];
//     }
// }
// console.log(res);
/*
{
  offline: true,
  online: true,
  individual: false
}
*/

// ______________________________________________________

// 4

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// };

// function Search(obj, str) {
//     for (let key in obj) {
//         if (obj[key] === str) {
//             console.log({ [key]: obj[key] }); // { name: 'WebBrain' }
//         }
//     }
// }

// Search(obj, "WebBrain");

// ______________________________________________________

// 5

// let obj = {
//     id: 1,
//     name: "atirgul",
//     color: "qizil",
//     count: 10,
//     price: "10$"
// };

// function searchValue(obj, str) {
//     for (let key in obj) {
//         if (typeof obj[key] === "string" && obj[key].includes(str)) {
//             console.log(obj[key]);
//         }
//     }
// }

// searchValue(obj, "i"); // atirgul, qizil

//______________________________________________________

// 6

// let person = {
//     id: 1,
//     name: "Odil",
//     age: 78,
//     child: {
//         id: 1,
//         name: "Ali",
//         age: 48,
//         child: {
//             id: 1,
//             name: "Umar",
//             age: 20
//         }
//     }
// };

// function collectAges(obj) {
//     let sum = 0;
//     if ('age' in obj) sum += obj.age;
//     if ('child' in obj) sum += collectAges(obj.child);
//     return sum;
// }

// console.log(collectAges(person)); // 146

//______________________________________________________

// 7

// let obj = {
//     id: 1,
//     name: "Usmon",
//     job: "developer"
// };

// // Chuqur nusxa olish
// let copy = JSON.parse(JSON.stringify(obj));

// obj.name = "Ali"; // faqat asl obj o‘zgaradi

// console.log(copy); // {id: 1, name: 'Usmon', job: 'developer'}

//______________________________________________________

// 8

// let obj = {
//     id: 1,
//     name: "Usmon",
//     age: 34,
//     year: 1990
// };

// let currentYear = new Date().getFullYear();

// if (currentYear - obj.year !== obj.age) {
//     console.log("xato malumot kiritdingiz");
// }

//______________________________________________________

// 9

// let obj = {
//     id: 1,
//     title: "the best",
//     address: {
//         street: "Farobiy",
//         number: "34"
//     }
// };

// let hasInnerObject = false;

// for (let key in obj) {
//     if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//         hasInnerObject = true;
//         break;
//     }
// }

// console.log(hasInnerObject); // true

