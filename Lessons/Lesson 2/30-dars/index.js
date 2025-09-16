// let arr = [2, 5, 1, 4, 8, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//================================================

// let result = arr3.reduce((a,b) => a + b, 0);
// console.log(result);

//================================================

// let arr2 = ["2.15", "5dfv", "5.4fbs"];


// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   let num = parseFloat(arr2[i]);
//   if (!isNaN(num)) {
//     sum += num;
//   }
// }

// console.log(sum);
//================================================

let arr = [2, 5, 1, 4, 8, 10];

let result = arr.reduce((acumlator, currentValue) => {
  if (currentValue % 2 === 0) {
    acumlator.juft.push(currentValue);
  } else {
    acumlator.toq.push(currentValue);
  }
  return acumlator;
}, { juft: [], toq: [] });

    
console.log(result);