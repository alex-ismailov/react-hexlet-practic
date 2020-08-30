import { createSelector } from 'reselect';

// BEGIN (write your solution here)
const getTasks = (state) => state.tasks;

export const filteredTasksSelector = createSelector(
  getTasks,
  (tasks) => {
    const { byId, allIds } = tasks;
    return allIds.map((id) => byId[id]);
  },
);
// END
