const form = document.getElementById("form");
const formInput = document.querySelector(".form_input");
const formList = document.querySelector(".form_list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formInput.value.trim().length === 0) {
        formInput.value = "";
        return;
    }

    const formItem = document.createElement("li");
    formItem.className = "form_item";

    formItem.innerHTML = `
        ${todo.title.length()> 25 
            ? `${todo.title.slice(0, 25)}...` 
            : todo.title()}
        <div class="form_list_control">
            <button id="form_item_delete_btn" type="button">O'chirish</button>
            <button id="form_item_save_btn" type="button">Bajarildik</button>
        </div>
    `;

});
