import { workouts } from "./state.js";
import { handleDelete, handleEdit, handleToggle } from "./handlers.js";

export function renderWorkouts() {
  const list = document.getElementById("workout-list");
  list.innerHTML = "";

  workouts.forEach((workout) => {
    const li = document.createElement("li");
    li.className = "workout-item";

    const title = document.createElement("span");
    title.className = "workout-title";
    title.textContent = workout.title;

    if (workout.completed) {
      title.style.textDecoration = "line-through";
      title.style.opacity = "0.65";
    }

    const actions = document.createElement("div");
    actions.className = "workout-actions";

    const doneBtn = document.createElement("button");
    doneBtn.className = "action-btn edit-btn";
    doneBtn.textContent = workout.completed ? "Ångra" : "Klar";

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn edit-btn";
    editBtn.textContent = "Redigera";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.textContent = "Ta bort";

    doneBtn.addEventListener("click", () => {
      handleToggle(workout.id);
    });

    editBtn.addEventListener("click", () => {
      handleEdit(workout.id);
    });

    deleteBtn.addEventListener("click", () => {
      handleDelete(workout.id);
    });

    actions.appendChild(doneBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(title);
    li.appendChild(actions);

    list.appendChild(li);
  });
}
