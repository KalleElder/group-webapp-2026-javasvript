import {
  addWorkout,
  removeWorkout,
  updateWorkout,
  toggleWorkout
} from "./state.js";

import { renderWorkouts } from "./ui.js";
import { saveToStorage } from "./storage.js";

export function handleAddWorkout() {
  const input = document.getElementById("workout-input");
  const title = input.value.trim();

  // Use native browser validation tooltip instead of a blocking alert()
  if (!title) {
    input.setCustomValidity("Skriv in ett träningspass först.");
    input.reportValidity();
    input.setCustomValidity(""); // Reset so next valid input isn't blocked
    return;
  }

  addWorkout({ id: Date.now().toString(), title, completed: false });
  saveToStorage();
  renderWorkouts();

  // Clear and refocus so the user can log the next workout right away
  input.value = "";
  input.focus();
}

export function handleDelete(id) {
  removeWorkout(id);
  saveToStorage();
  renderWorkouts();
}

export function handleEdit(id) {
  const newTitle = prompt("Skriv nytt namn på träningspasset:");

  // Optional chaining handles both Cancel (null) and empty string
  if (!newTitle?.trim()) return;

  updateWorkout(id, newTitle.trim());
  saveToStorage();
  renderWorkouts();
}

export function handleToggle(id) {
  toggleWorkout(id);
  saveToStorage();
  renderWorkouts();
}
