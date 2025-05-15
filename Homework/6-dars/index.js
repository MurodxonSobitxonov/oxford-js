let mahsulot = +prompt(`Mahsulot turini kiriting (telefon, laptop, quloqchin)`)
let soni = +prompt(`Mahsulot sonini kiriting`)
let chegirma_Kartasi = +prompt(`Chegirma kartangiz bormi? (ha yoki yo'q)`)

let narx = 0;

if (mahsulot === "telefon") {
   narx = 200;
} else if (mahsulot === "laptop") {
   narx = 800;
} else if (mahsulot === "quloqchin") {
   narx = 50;
} else {
   console.log(`Noto'g'ri mahsulot kiritildi.`);
}

let jami = narx * soni;

if (chegirma_Kartasi === "ha" && jami > 300) {
   jami *= 0.9;
}
else{
   jami *= 0.8;
}
console.log("Yakuniy to'lov summasi: $" + jami);

// _________________________________________________

let yosh = +prompt("Yoshingizni kiriting")
let talaba = +prompt("Talabamisiz? (ha yoki yo'q)")

let chiptaNarxi = 10000;

if (yosh < 18 || talaba === "ha") {
   chiptaNarxi = 5000;
}

console.log("Chipta narxi: " + chiptaNarxi + " so'm");