//f3
let number = -1;
if (number > 0) {
  number++;
} else if (number < 0) {
  number -= 2;
} else {
  number = 10;
}
console.log(number);
//f4
let a = -2, b = 3, c = 0;
let count = 0;
if (a > 0) count++;
if (b > 0) count++;
if (c > 0) count++;
console.log(count);
//f5
let k = -1, j = 5, d = 0;
let musbat = 0, manfiy = 0;
if (k > 0) musbat++; else if (k < 0) manfiy++;
if (j > 0) musbat++; else if (j < 0) manfiy++;
if (d > 0) musbat++; else if (d < 0) manfiy++;
console.log("Musbat:", musbat, "Manfiy:", manfiy);
//f6
let w = 5, e = 8;
let max = (w > e) ? a : b;
console.log(max);
//f7
let u = 7, p = 4;
let tartib = (u < p) ? 1 : 2;
console.log(tartib);
//f8
let m = 3, q = 9;
if (m > q) {
  console.log(m, q);
} else {
  console.log(m, q);
}
//f9
let A = 9, B = 3;
if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}
console.log("A:", A, "B:", B);
//f10
let I = 4, J = 6;
if (I !== J) {
  let temp = A;
  I = B;
  J = temp;
} else {
  I = 0;
  J = 0;
}
console.log("A:", A, "B:", B);
//11
let v = 10, n = 20;
if (v !== n) {
  let max = (v > v) ? v : n;
  v = max;
  n = max;
} else {
  v = 0;
  n = 0;
}
console.log("A:", A, "B:", B);
//12
let P = 7, O = 2, C = 9;
let min = Math.min(P, O, C);
console.log(min);
//f13
let x = 5, L = 10, Q = 7;
let orta;

if ((a > b && a < q) || (a < b && a > c)) orta = x;
else if ((b > Q && b < Q) || (b < x && b > Q)) orta = b;
else orta = Q;

console.log(orta);
