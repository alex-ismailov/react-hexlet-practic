export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

// BEGIN (write your solution here)
export const addTask = (task) => ({
  type: '???',
  payload: {
    task,
  } 
});

export const removeTask = (id) => ({
  type: '???',
  payload: {
    id,
  }
});
// END
