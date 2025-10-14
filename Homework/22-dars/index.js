const users = JSON.parse(localStorage.getItem('users')) || [];
const userList = document.getElementById('userList');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addBtn = document.getElementById('addBtn');
const themeSelect = document.getElementById('themeSelect');

themeSelect.addEventListener('change', (e) => {
  document.body.className = e.target.value === 'dark' ? 'dark' : '';
  localStorage.setItem('theme', e.target.value);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  themeSelect.value = savedTheme;
  document.body.className = savedTheme === 'dark' ? 'dark' : '';
}

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const age = +ageInput.value.trim();
  if (!name || !age) return alert("Ma'lumot to‘liq emas!");

  users.push({ id: Date.now(), name, age });
  localStorage.setItem('users', JSON.stringify(users));
  renderUsers();
  nameInput.value = '';
  ageInput.value = '';
});

function renderUsers() {
  userList.innerHTML = '';
  
  users
    .sort((a, b) => a.age - b.age) 
    .forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${user.name} (${user.age} yosh)</span>
        <div>
          <button onclick="deleteUser(${user.id})">❌</button>
        </div>
      `;
      userList.appendChild(li);
    });
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  renderUsers();
}

renderUsers();
