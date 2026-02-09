document
  .getElementById("add-tasks")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
  });

function addTask() {
  const todoInput = document.getElementById("draft-area");
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("You forgot to type a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" name="" class="mark-done">
    <span>${taskText}</span>
    <button class="remove-button">
        <img src="images/trashcan.svg" alt="Trashcan">
    </button>
  `;

  // adding marking-done logic
  const checkbox = li.querySelector(".mark-done");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  // adding ability to remove the task
  const deleteBtn = li.querySelector(".remove-button");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // clean up text in input field
  document.getElementById("todo-list").appendChild(li);
  todoInput.value = "";
  todoInput.focus();
}
