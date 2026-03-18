import { workouts } from "./state.js";
import { handleDelete, handleEdit } from "./handlers.js";

export function renderWorkouts() {
  const list = document.getElementById("workout-list");
  list.innerHTML = "";

  workouts.forEach((workout) => {
    const li = document.createElement("li");
    li.className = "workout-item";

    const title = document.createElement("span");
    title.className = "workout-title";
    title.textContent = workout.title;

    const actions = document.createElement("div");
    actions.className = "workout-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn edit-btn";
    editBtn.textContent = "Redigera";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.textContent = "Ta bort";

    editBtn.addEventListener("click", () => {
      handleEdit(workout.id);
    });

    deleteBtn.addEventListener("click", () => {
      handleDelete(workout.id);
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(title);
    li.appendChild(actions);

    list.appendChild(li);
  });
}
