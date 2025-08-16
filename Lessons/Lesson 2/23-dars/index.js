// let arr = [5, -3, 2, 8, -11, 14, true, "hamid", "false"];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && arr[i] > 0) {
//         sum += arr[i];
//     }
// }

// console.log(sum);

//----------------------------------------------------------

// let arr = [5, -3, 2, 8, -11, 14, true, "hamid", "false"];
// let sum = 0;
// arr.forEach(item => {
//     if (typeof item === "number" && item > 0) {
//         sum += item;
//     }
// });

// console.log(sum);

let arr = [5, -3, 2, 8, -11, 14, true, "hamid", "false"];
let sum = arr.reduce((reduce, item) => {
    if (typeof item === "number" && item > 0) {
        return reduce + item;
    }
    return reduce;
}, 0);