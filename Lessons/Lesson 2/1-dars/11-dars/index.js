let str = "Lo2rem ip5sum 7 dol9or";

let letters = "";
let numbers = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        letters += char;
    }

    if (char >= '0' && char <= '9') {
        numbers += char;
    }
}

console.log("Harflar:", letters);
console.log("Sonlar:", numbers);


