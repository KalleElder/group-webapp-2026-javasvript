const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

btn.addEventListener("click", addTask);

function addTask() {

  const input = document.getElementById("taskInput");

  const li = document.createElement("li");

  li.textContent = input.value;

  list.appendChild(li);

}
