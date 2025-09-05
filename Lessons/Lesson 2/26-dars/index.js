function user({ name, age: yosh }) {
  console.log(name, yosh);
  
}
user({ name: "John", age: 20 });

function sum({ ...arr }) {
  console.log(arr);
  
}

sum(1, 2, 3, 4, 5,)

