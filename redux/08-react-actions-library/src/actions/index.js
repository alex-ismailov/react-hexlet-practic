import { createAction } from 'redux-actions';

export const updateNewTaskText = createAction('TEXT_UPDATE');

// BEGIN (write your solution here)
export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
// END
