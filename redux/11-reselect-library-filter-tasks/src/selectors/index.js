import { createSelector } from 'reselect';

// BEGIN (write your solution here)
const getTasks = (state) => state.tasks;

export const filteredTasksSelector = createSelector(
  getTasks,
  (tasks) => {
    const { currentFilterName } = tasks;
    const { byId, allIds } = tasks;
    const mappedTasks = allIds.map((id) => byId[id]);
    if (currentFilterName === 'all') {
      return mappedTasks;
    }
    
    return mappedTasks.filter((task) => task.state === currentFilterName);
  },
);
// END
