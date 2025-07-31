//dom Events

//inpud
//click
//mouseenter
//mouseout
//mousemove

const myInput = document.querySelector(".myInput")
const myBtn = document.querySelector(".myBtn")
const list = document.querySelector(".list");

//addEvantListener => elementga qandaydir hodisa (event) bo'lgandaqaysidir funksiya ishlashi uchun

myBtn.addEventListener("input", buttonClick);

function buttonClick() {
    const h1 = document.createElement("h1");
    h1.textContent = myInput.value;
    list.appendChild(h1);
    myInput.value = "";
}