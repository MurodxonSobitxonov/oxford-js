let Arr = [1, 2, 3, 4, 5];

let [alik, ikinchi, ...hammasi] = Arr;

console.log(alik);
console.log(...hammasi);

let str = "Hello";

console.log(...str); 

function engKatta(...arrey) {
  return arrey[1]=Math.max(...arrey);
}

console.log(engKatta(1, 2, 3, 4, 5));
