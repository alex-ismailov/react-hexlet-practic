export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

// BEGIN (write your solution here)
export const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
});

export const removeTask = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});
// END
