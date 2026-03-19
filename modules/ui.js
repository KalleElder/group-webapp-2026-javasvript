// ui.js no longer imports handlers — event delegation in app.js handles all button actions.
// This removes the circular dependency: ui.js ↔ handlers.js.
import { workouts } from "./state.js";

export function renderWorkouts() {
  const list = document.getElementById("workout-list");
  list.innerHTML = "";

  // Empty state: give the user a friendly nudge instead of a blank list
  if (workouts.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "Inga träningspass ännu...";
    list.appendChild(empty);
    return;
  }

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

    // data-action and data-id are picked up by the delegated listener in app.js
    const doneBtn   = createActionBtn(workout.completed ? "Ångra" : "Klar", "action-btn edit-btn",   "toggle", workout.id);
    const editBtn   = createActionBtn("Redigera",                            "action-btn edit-btn",   "edit",   workout.id);
    const deleteBtn = createActionBtn("Ta bort",                             "action-btn delete-btn", "delete", workout.id);

    actions.append(doneBtn, editBtn, deleteBtn);
    li.append(title, actions);
    list.appendChild(li);
  });
}

// Small helper to avoid repeating button creation four times
function createActionBtn(text, className, action, id) {
  const btn = document.createElement("button");
  btn.className = className;
  btn.textContent = text;
  btn.dataset.action = action;
  btn.dataset.id = id;
  return btn;
}
