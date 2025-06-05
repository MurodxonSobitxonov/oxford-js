// function ortachaArifmetik(sonlar) {
//     if (sonlar.length === 0) return 0;
//     let summa = 0;

//     for (let i = 0; i < sonlar.length; i++) {
//         summa += sonlar[i];
//     }

//     let ortacha = summa / sonlar.length;
//     return ortacha;
// }

// // Misol uchun:
// let qiymatlar = [4, 7, 6, 3, 10];
// let natija = ortachaArifmetik(qiymatlar);
// console.log("O'rtacha arifmetik:", natija);
// javob 6 chadi
//--------------------------------------------------------------------------------------------
function ortachaGeometrik(sonlar) {
    if (sonlar.length === 0) return 0;

    let kopaytma = 1;
    for (let i = 0; i < sonlar.length; i++) {
        kopaytma *= sonlar[i];
    }

    return Math.pow(kopaytma, 1 / sonlar.length);
}

// Misol:
let massiv = [4, 7, 9];
let natija = ortachaGeometrik(massiv);

console.log("O'rtacha geometrik:", natija);
