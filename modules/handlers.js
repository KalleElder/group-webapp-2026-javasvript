import {
  addWorkout,
  removeWorkout,
  updateWorkout
} from "./state.js";

import { renderWorkouts } from "./ui.js";
import { saveToStorage } from "./storage.js";

export function handleAddWorkout() {
  const input = document.getElementById("workout-input");
  const title = input.value.trim();

  if (!title) {
    alert("Skriv in ett träningspass först.");
    return;
  }

  const workout = {
    id: Date.now().toString(),
    title: title,
    completed: false
  };

  addWorkout(workout);
  saveToStorage();
  renderWorkouts();

  input.value = "";
}

export function handleDelete(id) {
  removeWorkout(id);
  saveToStorage();
  renderWorkouts();
}

export function handleEdit(id) {
  const newTitle = prompt("Skriv nytt namn på träningspasset:");

  if (!newTitle || !newTitle.trim()) {
    return;
  }

  updateWorkout(id, newTitle.trim());
  saveToStorage();
  renderWorkouts();
}
