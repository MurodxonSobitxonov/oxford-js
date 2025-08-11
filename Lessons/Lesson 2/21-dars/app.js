let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.querySelector("#input");
const list = document.querySelector("#taskList");
const count = document.querySelector("#count");
const clearBtn = document.querySelector("#clear");
const addBtn = document.querySelector("#addBtn");

function updateUI() {
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <span class="delete" data-id="${i}">🗑</span>
    `;
    list.appendChild(li);
  });

  count.textContent = `Sizda ${tasks.length} ta vazifa mavjud`;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = input.value.trim();
  if (text) {
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    tasks.push(formattedText);
    input.value = "";
    updateUI();
  }
}

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", () => {
  addTask();
});

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;
    tasks.splice(id, 1);
    updateUI();
  }
});

clearBtn.addEventListener("click", () => {
  tasks = [];
  localStorage.removeItem("tasks");
  updateUI();
});

updateUI();
