let text = "Algoritm2016!";

let upper = 0, lower = 0, num = 0, symbol = 0;

text.split("").forEach(char => {
    if (char >= "A" && char <= "Z") upper++;
    else if (char >= "a" && char <= "z") lower++;
    else if (char >= "0" && char <= "9") num++;
    else symbol++;
});

console.log({ upper, lower, num, symbol });
  