// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//       this.top = null;
//   }

//   push(data) {
//       const newNode = new Node(data);
//       newNode.next = this.top;
//       this.top = newNode;
//   }

//   pop() {
//       if (this.top === null) return null;
//       const popped = this.top;
//       this.top = this.top.next;
//       return popped.data;
//   }

//   peek() {
//       return this.top ? this.top.data : null;
//   }

//   isEmpty() {
//       return this.top === null;
//   }

//   display() {
//       let current = this.top;
//       let output = '';
//       while (current) {
//           output += current.data + " -> ";
//           current = current.next;
//       }
//       console.log(output + "null");
//   }
// }

// // Reverse string using Stack
// function reverseString(str) {
//   const stack = new Stack();
//   for (let char of str) {
//       stack.push(char);
//   }

//   let reversed = '';
//   while (!stack.isEmpty()) {
//       reversed += stack.pop();
//   }
//   return reversed;
// }

// // Main menu (console-based, Node.js only)
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let stack = null;

// function showMenu() {
//   console.clear();
//   console.log("1. Stack yaratish va element qo'shish");
//   console.log("2. Stackdan element o'chirish");
//   console.log("3. Stackni ko'rsatish");
//   console.log("4. So'zni teskari qilish (stack yordamida)");
//   console.log("5. Chiqish\n");

//   readline.question("Tanlovingizni kiriting: ", choice => {
//       switch (choice) {
//           case "1":
//               stack = new Stack();
//               addElements();
//               break;
//           case "2":
//               if (stack) {
//                   const removed = stack.pop();
//                   console.log("O'chirilgan element:", removed);
//               } else {
//                   console.log("Avval stack yarating!");
//               }
//               pause();
//               break;
//           case "3":
//               if (stack) {
//                   stack.display();
//               } else {
//                   console.log("Avval stack yarating!");
//               }
//               pause();
//               break;
//           case "4":
//               readline.question("So'z kiriting: ", word => {
//                   console.log("Teskari:", reverseString(word));
//                   pause();
//               });
//               break;
//           case "5":
//               readline.close();
//               break;
//           default:
//               console.log("Noto'g'ri tanlov!");
//               pause();
//       }
//   });
// }

// function addElements() {
//   readline.question("Element kiriting (to'xtatish uchun '0'): ", val => {
//       if (val === "0") {
//           showMenu();
//       } else {
//           stack.push(val);
//           addElements();
//       }  
//   });
// }

// function pause() {
//   readline.question("\nDavom etish uchun Enter bosing...", () => {
//       showMenu();
//   });
// }

// showMenu();
