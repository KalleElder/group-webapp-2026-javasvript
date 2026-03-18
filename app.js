import { handleAddWorkout } from "./modules/handlers.js";
import { renderWorkouts } from "./modules/ui.js";
import { loadFromStorage } from "./modules/storage.js";

document
  .getElementById("add-btn")
  .addEventListener("click", handleAddWorkout);

loadFromStorage();
renderWorkouts();
