console.log(null || 2 && 4); // 1 savolni javobi 4 chiqadi

console.log(console.log(1) && console.log(2)); // 2 savolni javobi 1, undefined chiqadi

console.log(1 && null && 2); // 3 savolni javobi null chiqadi

console.log(console.log(1) || 2 || console.log(3)); // 4 savolni javobi 1, 2 chiqadi

console.log(null  || 2 || undefined); // 5 savolni javobi 2 chiqadi

console.log( 5 > 4); // true chiqadi

console.log("apple" > "pineapple"); // false chiqadi

console.log("2" > "12"); // true chiqadi

console.log(undefined == null); //true chiqadi

console.log(undefined === null); //false chiqadi

console.log(null == "\n0\n"); //false chiqadi

console.log(null === +"\n0\n"); //false chiqadi

console.log("" + 1 + 0); // 10 ciqadi 

console.log("" - 1 + 0); // -1 chiqadi

console.log(true + false); // true chiqadi

console.log(6 / "3"); // 2 chiqadi

console.log("2" * "3"); // 6 chiqadi

console.log(4 + 5 + "px"); // 9 px chiqadi

console.log("$" + 4 + 5); // $45 chiqadi

console.log("4px" - 2); //NaN chiqadi

console.log("-9" +5); // -95 chiqadi

console.log("-9" -5); // -14 chiqadi

console.log(null + 1); // 1 chiqadi

console.log(undefined + 1); // NaN chiqadi

console.log("\t \n" - 2); // -2 chiqadi

let a = 2 // 2 chiqadi
console.log(a);

let x = 1 + (a *= 2) // 5 chiqadi
console.log(x);

let q = 1, b = 1; // 1, 1 chiqadi
console.log(q, b);

let c = ++q; // 2 chiqadi
console.log(c);

let d = b++; // 1 chiqadi
console.log(d);