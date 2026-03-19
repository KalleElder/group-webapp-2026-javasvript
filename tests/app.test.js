import { describe, it, expect, beforeEach } from 'vitest';
import { addWorkout, workouts, setWorkouts } from '../modules/state.js';

describe('state.js', () => {
  beforeEach(() => {
    setWorkouts([]);
  });

  it('should add a workout to the workouts array', () => {
    const workout = {
      id: '1',
      title: 'Testpass',
      completed: false,
    };

    addWorkout(workout);

    expect(workouts).toHaveLength(1);
    expect(workouts[0].title).toBe('Testpass');
    expect(workouts[0].completed).toBe(false);
  });
});
