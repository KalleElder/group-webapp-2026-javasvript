import { addWorkout, workouts, setWorkouts } from "../modules/state.js";

function testAddWorkout() {
  setWorkouts([]);

  addWorkout({ id: "1", title: "Testpass", completed: false });

  if (workouts.length === 1 && workouts[0].title === "Testpass") {
    console.log("Test OK");
  } else {
    console.log("Test Failed");
  }
}

testAddWorkout();
