import { workouts, setWorkouts } from "./state.js";

export function saveToStorage() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

export function loadFromStorage() {

  const data = localStorage.getItem("workouts");

  if (data) {
    setWorkouts(JSON.parse(data));
  }

}
