// arr exemrle - arrydagi elementlarni nomlab olib ishlatish usuli.
const arr = ["10", john, true, "22"];
// ... spreed operator arreydan nusxa olis uchun ishtatiladi.
const [ten, boleanTrue, ...hammasi] = arr;

console.log(hammasi)

const obj = {
    name: "John",
    age: 28,
    status: "activa",
}
    
// ... spreed operator obyektdan nusxa olis uchun ishlatiladi.
//object destructuring - obyekdagi qiymatlarni o'zimiz  nomlab olish yoki objeckdagi qiymatni olish usuli.
const { age, ...hammasi2 } = obj;

console.log(hammasi2);
