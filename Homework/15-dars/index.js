let users = [
    { id: 3, name: "Abubark", age: 25, status: "false" },
    { id: 1, name: "ziyadillo", age: 19, status: "true" },
    { id: 2, name: "ozod", age: 30, status: "true" },
    { id: 4, name: "ahmat", age: 23, status: "false" },
    { id: 5, name: "serzod", age: 28, status: "true" },
  ];
  
  function sartUsers(usersArray, sortBy = "name") {
    return usersArray.sort((a, b) => {
      if (typeof a[sartBy] === "string") {
        return a[sartBy].localeCompare(b[sortBy]);
      } else {
        return a[sartBy] - b[sartBy];
      }
    });
  }
  
  console.log("==============================");
  
  console.log("Name bo'yicha:");
  console.log(sartUsers([...users], "name")); 
  
  console.log("==============================");
  
  console.log("Yosh bo'yicha:");
  console.log(sartUsers([...users], "age"));
  
  console.log("=============================");
  
  console.log("ID bo'yicha:");
  console.log(sartUsers([...users], "id"));
  
  console.log("=============================");
  
  console.log("Status bo'yicha:");
  console.log(sartUsers([...users], "status"));


// ---------------------------------------------------------------------------


let foydalanuvchilar = [
    { ism: "Abubark", status: "online" },
  { ism: "ziyodillo", status: "offline" },
  { ism: "ozod", status: "busy" },
  { ism: "ahmat", status: "online" },
  { ism: "serzod", status: "offline" }
];


foydalanuvchilar.sort((a, b) => {
  if (a.status < b.status) return 1;
  if (a.status > b.status) return -1;
  return 0;
});

console.log(foydalanuvchilar);

  
// ---------------------------------------------------------------------------


let arr1 = [1, 3];
let arr2 = [2];
let combined = arr1.concat(arr2);
let sorted = combined.sort((a, b) => a - b);
let even = sorted.filter(x => x % 2 === 0);
let odd = sorted.filter(x => x % 2 !== 0);
let len = sorted.length;
let median;

if (len === 0) {
  median = 0;
} else if (len % 2 === 1) {
  median = sorted[Math.floor(len / 2)];
} else {
  median = (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
}

console.log(sorted);
console.log(even);
console.log(odd);
console.log(median);