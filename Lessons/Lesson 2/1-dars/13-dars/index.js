let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [6, 7, 8, 9, 10];

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = arr.slice(5); 
console.log(newArr1); 

//________________________________________________

let newArr = [6, 7, 8, 9, 10];
let juftlar = [];
let toqlar = [];

let copy = newArr.slice();

for (let i = 0; i < copy.length; i++) {
    let son = copy.at(i);
    if (son % 2 === 0) {
        juftlar.push(son); 
    } else {
        toqlar.push(son); 
    }
}

console.log("Juftlar:", juftlar);  
console.log("Toqlar:", toqlar);   