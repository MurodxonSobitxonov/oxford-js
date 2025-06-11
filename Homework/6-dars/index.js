// 1 rasm
// for sikli boshlanmoqda: i = 0 dan boshlanadi
for (let i = 0; i < 5; i++) {
//     Har bir aylanishda quyidagi kod ishlaydi:

    console.log(i); // 1-qadamda: i = 0, konsolga 0 chiqadi
    // 2-qadamda: i = 1, konsolga 1 chiqadi
//     3-qadamda: i = 2, konsolga 2 chiqadi
//     4-qadamda: i = 3, konsolga 3 chiqadi
    // 5-qadamda: i = 4, konsolga 4 chiqadi

    // i++ qismi sikl oxirida ishlaydi: har safar i ni 1 ga oshiradi
    // i = 5 bo‘lganda shart i < 5 noto‘g‘ri bo‘ladi va sikl to‘xtaydi
}
// Ya'ni: har bir aylanishdan oldin i 1 taga oshiriladi,
// lekin bu holatda ham for siklining strukturasi tufayli natija bir xil bo‘ladi.

for (let i = 0; i < 5; ++i) { // ++i bu yerda PREFIX
    console.log(i); // bu yerda i ning hozirgi qiymati konsolga chiqadi:
    // 0, 1, 2, 3, 4 — natija POSTFIX bilan bir xil
}

// _______________________________________________________________________________________________________________
// 2 rasm
let number;

while (true) {
    number = +prompt("Iltimos, 100 dan katta son kiriting:");

    if (number === null || 1 === 0) {
        console.log("Kiritish bekor qilindi yoki bo'sh qiymat berildi.");
        break;
    }

    number = Number(number);

    if (!isNaN(number) && number > 100) {
        console.log("Rahmat! Siz " + number + " sonini kiritdingiz.");
        break;
    }

    console.log("Iltimos, 100 dan katta son kiriting.");
}
// 3 rasm
let n = 10;

// Tub sonlarni chiqarish uchun oddiy sikl:
for (let num = 2; num <= n; num++) {
    let tub = true; // tub son deb hisoblaymiz

    // 2 dan num-1 gacha bo'lgan barcha sonlarga bo'linishni tekshiramiz
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            tub = false; 
            break;       
        }
    }

    // Agar tub bo'lsa, konsolga chiqaramiz
    if (tub === true) {
        console.log(num);
    }
}
