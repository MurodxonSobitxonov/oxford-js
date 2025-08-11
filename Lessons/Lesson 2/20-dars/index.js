// 1 - usul - class orqali elementlarni olish.
// const boxes = document.querySelector('.boxes');

// const { createElement } = require("react");

// 2 - usul - teg orqali html elementni charish.
// const boxes = document.querySelector("div");

// 3-usul - barcha class yoki id larni arryda chiqarish.
// const boxes = document.querySelectorAll('.boxes');

// 4-usul - htmldagi id bilan berilgan elementni olish #.
// const boxes = document.getElementById('boxes');

// 5-usul - htmldadi elementlarni class bo'yicha arryda chaqirib olish.
// const boxes = document.getElementsByClassName('boxes');

//textContent - innerhtml farqi

//textContent - html elementni ma'lumotni o'zgartirish.

//innerHtml - elemt malumotni o'zgartirish yoki html element berish.

// style - html elementi style xossasi o'zgartirish.

// creatElement - js da turib html element yaratish.

//appendChild - js dagi elementlarni html ga birlashtirish.

// Kod yozilish usuli

// const text = document.querySelector('.text');

// text.textContent = 'Hayr maktabim';

// text.innerHTML = '<i>Hayr Maktabim</i>';

// text.style.color = 'red';

// text.style.backgroundColor = 'blue';

// const p = createElement('p');
// const h3 = createElement('h3');

// p.textContent = 'Bizni js da yaraatilgan P';
// h3.textContent = 'Bizni H3';

// parent.appendChild(p);
// parent.appendChild(h3);

// console.log(parent);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parent = document.querySelector('.parent');

arr.forEach((item) => {
    const p = createElement('p');
  p.textContent = item;
  item % 2 === 0 ? (p.style.color = 'red') : (p.style.color = 'blue');
    parent.appendChild(p);
}); 