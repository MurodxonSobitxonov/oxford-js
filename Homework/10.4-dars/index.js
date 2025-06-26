// function binaryCount(n) {
//     let binary = n.toString(2); // binary formatga o'tkazish
//     let ones = 0, zeros = 0;

//     for (let char of binary) {
//         if (char === '1') ones++;
//         else if (char === '0') zeros++;
//     }

//     console.log(`${n} === ${binary}`);
//     console.log(`${ones} ta bir, ${zeros} ta nol qatnashgan.`);
// }

// binaryCount(5); // misol: 5 === 101 → 2 ta bir, 1 ta nol
  

//_________________________________________________________________

// function difference(arr) {
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let result = Math.abs(max - min);

//     console.log(`Farq: ${result}`);
// }

// difference([12, 5, 33, 7, 20]); // Farq: 28