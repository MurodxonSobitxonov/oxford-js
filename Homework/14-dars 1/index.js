// let fruits = ["apples", "Pear", "Orenge"];

// let shopingCart = fruits;
// shopingCart.push("Banana");

// console.log(fruits.length); //  length of fruits array is 4

//----------------------------------

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");

// let middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Classics";

// let firstElement = styles.shift();
// console.log("Removed:", firstElement);

// styles.unshift("Rap", "Reggae");

// console.log(styles);

//-----------------------------------

// let arr = ["a", "b"];
// arr.push(function() {
//   console.log(this);
// });

// arr[2](); // logs the array itself: ["a", "b", ƒ]

//-----------------------------------

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Enter a number", "");

        // Agar foydalanuvchi bekor qilsa (Cancel bosilsa) yoki bo‘sh kiritilsa — to‘xtaydi
        if (value === null || value.trim() === "" || isNaN(value)) {
            break;
        }

        numbers.push(+value); // son sifatida qo‘shiladi
    }

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

// Ishlatish:
console.log("Yig'indi: " + sumInput());
  
