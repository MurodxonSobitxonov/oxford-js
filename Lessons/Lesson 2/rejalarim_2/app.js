const form = document.getElementById("form")
const formInput = document.querySelector(".form_input")
const formList = document.querySelector(".form_list")
const emptyItem = document.querySelector(".empty_item")

let todos = []

readTodos()

function readTodos() {
    if (!todos.length) {
        emptyItem.style.display = "block"
        return
    }
    emptyItem.style.display = "none"

    const listItem = document.createElement("li")
    listItem.className = "form_item"

    todos.forEach((todo) => {
        listItem.innerHTML = `
        ${todo.title.length > 25 ? `${todo.title.slice(0, 25)}...` : todo.title}
        <div class="form_list_control">
            <button class="form_item_delete_btn" type="button">O'chirish</button>
            <button class="form_item_save_btn" type="button">Bajarildi</button>
        </div>`

        const deleteTodoBtn = listItem.querySelector(".form_item_delete_btn")
        deleteTodoBtn.addEventListener("click", () => deleteTodo(todo.id))
    })

    formList.appendChild(listItem)
}


form.addEventListener("submit", createTodo)

let count = 1;

function createTodo(e) {
    e.preventDefault()

    if (formInput.value.trim().length === 0) {
        formInput.value = ""
        return
    }


    let newTodo = {
        id: `item-${count++}`,
        title: formInput.value.trim(),
        isDone: false
    }

    todos.push(newTodo)

    readTodos()

    formInput.value = ""
}

function deleteTodo(todo) {
    console.log(todo);
}

const list = document.querySelector('.form_list');

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('form_item_delete_btn')) {
    e.target.closest('.form_item').remove();
  }
});
