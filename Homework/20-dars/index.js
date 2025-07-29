// Sahifani tozalash
document.documentElement.innerHTML = "";

// <head> va <style> qo‘shish
const head = document.createElement("head");
const style = document.createElement("style");
style.textContent = `
  .red { color: red; }
  .green { color: green; }
  .blue { color: blue; }
  body { font-family: sans-serif; padding: 20px; }
`;
head.appendChild(style);
document.documentElement.appendChild(head);

// body yaratish
const body = document.createElement("body");
document.documentElement.appendChild(body);

// Sarlavha va konteynerlar
const title1 = document.createElement("h3");
title1.textContent = "1-masala: Ismlarni bosh harflarini chiqarish (J.D)";
body.appendChild(title1);

const initialsDiv = document.createElement("div");
body.appendChild(initialsDiv);

const title2 = document.createElement("h3");
title2.textContent = "2-masala: Ranggli sonlar (JS da)";
body.appendChild(title2);

const coloredDiv = document.createElement("div");
body.appendChild(coloredDiv);

// === 1-MASALA ===
const names = ["John Doe", "Mike Tyson", "Ali Vali", "Lola Yoqubova"];
names.forEach(name => {
  const parts = name.split(" ");
  const initials = parts.map(part => part[0]).join(".") + ".";
  const p = document.createElement("p");
  p.textContent = initials;
  initialsDiv.appendChild(p);
});

// === 2-MASALA ===
const numbers = [5, 10, 15, 20, 30, 50, 80, 100];
numbers.forEach(num => {
  const span = document.createElement("span");
  span.textContent = num + " ";

  if (num > 10 && num <= 20) {
    span.className = "red";
  } else if (num > 20 && num <= 50) {
    span.className = "green";
  } else if (num > 50 && num <= 100) {
    span.className = "blue";
  }

  document.appendChild(span);
});
