export let workouts = [];

export function setWorkouts(newWorkouts) {
  workouts = newWorkouts;
}

export function addWorkout(workout) {
  workouts.push(workout);
}

export function removeWorkout(id) {
  workouts = workouts.filter(w => w.id !== id);
}

export function updateWorkout(id, newTitle) {
  workouts = workouts.map(w => {
    if (w.id === id) {
      return { ...w, title: newTitle };
    }
    return w;
  });
}
