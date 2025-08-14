const elForm = document.querySelector("#form"),
  elAddBtn = document.querySelector("#addBtn"),
  elInput = document.querySelector("#todoInput"),
  elList = document.querySelector("#todoList"),
  elMessage = document.querySelector("#message");

let todos = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = elInput.value.trim();

  if (inputValue === "") {
    elMessage.textContent = "Please enter a todo item.";
    return;
  } else {
    elMessage.textContent = "";

    const todo = {
      inputValue: inputValue,
      date: new Date().toLocaleDateString(),
      complated: false,
    };

    todos.push(todo);
    elForm.reset();
    renderTodos(todos);
  }
});

function renderTodos(todos) {
  elList.innerHTML = "";
  todos.map((item, index) => {
    elList.innerHTML += `
      <div class='todo-item ${item.complated ? "checked" : ""}  '>
        <div class="todo-left">
          <span class="todo-icon">📅</span>
          <span class="todo-text">${item.date} — ${item.inputValue}    </span>
       
        </div>
        <div class="todo-right">
          <button onclick = handleComplatedItem(${index})  class="todo-action">✅</button>
          <button onclick = editTodos(${index})   class="todo-action">✏️</button>
          <button onclick = handleDeletedItem(${index}) class="todo-action"> 🗑️</button>
        </div>
      </div>
    
    `;
  });
}

// handleDeletedItem

function handleDeletedItem(id) {
  const deletedTodos = todos.filter((item, i) => {
    return id !== i;
  });

  todos = deletedTodos;
  renderTodos(todos);
}

//  complated Item

function handleComplatedItem(id) {
  complatedTodos = todos.map((item, index) => {
    if (id === index) {
      return {
        ...item,
        complated: !item.complated,
      };
    } else {
      return item;
    }
  });

  todos = complatedTodos;
  renderTodos(todos);
}

//edit todos

function editTodos(id) {
  const editTodos = todos.map((item, i) => {
    if (id === i) {
      return {
        ...item,
        inputValue: prompt("edit todo", item.inputValue),
      };
    } else {
      return item;
    }
  });

  todos = editTodos;
  renderTodos(todos);
}
