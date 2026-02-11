document.getElementById("add-tasks").addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

const todoList = document.getElementById("todo-list");

const backedTasks = localStorage.getItem('todoList');
if (backedTasks) {
  let tasks = JSON.parse(backedTasks);

  for (let task of tasks) {
    let li = createTask(task.text);

    if (task.completed) {
      li.querySelector(".mark-done").setAttribute("checked", true);
      li.classList.add("completed");
    }

    todoList.appendChild(li);
  }

}

function createTask(text) {
  let li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" class="mark-done">
    <span>${text}</span>
    <button class="remove-button">
        <img src="images/trashcan.svg" alt="Trashcan">
    </button>
  `;

  let checkbox = li.querySelector(".mark-done");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }

    if (li.classList.contains("completed")) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }

    saveList();
  });

  li.querySelector(".remove-button").addEventListener("click", function () {
    li.remove();
    saveList();
  });

  return li;
}

function saveList() {
  let tasksRaw = document.querySelectorAll("#todo-list li");

  let tasks = Array.from(tasksRaw).map(li => {
    return {
      text: li.textContent.trim(),
      completed: li.classList.contains('completed')
    }
  })

  localStorage.setItem("todoList", JSON.stringify(tasks));
}

function addTask() {
  const todoInput = document.getElementById("draft-area");
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("You forgot to type a task!");
    return;
  }

  let li = createTask(taskText);
  todoList.appendChild(li);
  saveList();
  todoInput.value = "";
  todoInput.focus();
}

function clearTasks() {
  if (!confirm("Delete all the todos?")) return;
  document.getElementById("todo-list").innerHTML = "";
  localStorage.clear();
}
