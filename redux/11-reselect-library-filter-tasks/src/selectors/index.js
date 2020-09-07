import { createSelector } from 'reselect';

// BEGIN (write your solution here)
const getTasks = (state) => {
  return state.tasks;
};

export const allTasksSelector = createSelector(
  getTasks,
  (tasks) => tasks.allIds.map((id) => byId[id]),
);

export const activeTasksSelector = createSelector();

export const finishedTasksSelector = createSelector();

export const filteredTasksSelector = createSelector(
  getTasks,
  (tasks) => {
    console.log('selector work');
    const { byId, allIds } = tasks;
    return allIds.map((id) => byId[id]);
  },
);
// END
