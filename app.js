import { handleAddWorkout, handleDelete, handleEdit, handleToggle } from "./modules/handlers.js";
import { renderWorkouts } from "./modules/ui.js";
import { loadFromStorage } from "./modules/storage.js";

const input = document.getElementById("workout-input");
const workoutList = document.getElementById("workout-list");

// Add workout on button click or Enter key in input field
document.getElementById("add-btn").addEventListener("click", handleAddWorkout);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddWorkout();
});

// Single delegated listener for all workout actions (toggle, edit, delete).
// Avoids attaching 3 listeners per item on every render.
workoutList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const { action, id } = btn.dataset;
  if (action === "toggle") handleToggle(id);
  if (action === "edit")   handleEdit(id);
  if (action === "delete") handleDelete(id);
});

loadFromStorage();
renderWorkouts();

// Focus input on load so the user can start typing immediately
input.focus();
