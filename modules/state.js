export let workouts = [];

export function setWorkouts(newWorkouts) {
  workouts = newWorkouts;
}

export function addWorkout(workout) {
  workouts.push(workout);
}

export function removeWorkout(id) {
  workouts = workouts.filter((workout) => workout.id !== id);
}

export function updateWorkout(id, newTitle) {
  workouts = workouts.map((workout) => {
    if (workout.id === id) {
      return {
        ...workout,
        title: newTitle
      };
    }

    return workout;
  });
}

export function toggleWorkout(id) {
  workouts = workouts.map((workout) => {
    if (workout.id === id) {
      return {
        ...workout,
        completed: !workout.completed
      };
    }

    return workout;
  });
}
