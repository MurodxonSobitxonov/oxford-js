// for(let i = -100; i <= 100; i++) {
//     if(i % 5 === 0) {
//         console.log(i);
//     }
// }
// let a = -100;
// while (a <= 100) {
//     if (a % 5 === 0) {
//         console.log(a);
//     }
//     a++;
// }

// let r = -100;
// do {
//     if (r % 5 === 0) {
//         console.log(r);
//     }
//     r++;
// } while (r <= 100);

// ============================

for (let i = -100; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

let a = -100;
while (a <= 100) {
    if (a % 5 === 0 && a % 3 === 0) {
        console.log(a);
    }
    a++;
}

let r = -100;
do {
    if (r % 5 === 0 && r % 3 === 0) {
        console.log(r);
    }
    r++;
} while (r <= 100);
