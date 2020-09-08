import { createSelector } from 'reselect';

// BEGIN (write your solution here)
const getTasks = (state) => {
  return state.tasks;
};

export const allTasksSelector = createSelector(
  getTasks,
  (tasks) => {
    const { byId, allIds } = tasks;
    return allIds.map((id) => byId[id])
  },
);

export const activeTasksSelector = createSelector(
  allTasksSelector,
  (tasks) => {
    const res = tasks.filter((task) => task.state === 'active');
    console.log(res);
    return res;
  },
);

export const finishedTasksSelector = createSelector(
  allTasksSelector,
  (tasks) => {
    const res = tasks.filter((task) => task.state === 'finished');
    console.log(res);
    return res;
  },
);

export const filteredTasksSelector = createSelector(
  allTasksSelector,
  activeTasksSelector,
  finishedTasksSelector,
  (tasks) => tasks,
);
// END
