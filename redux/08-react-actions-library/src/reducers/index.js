import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const {
  updateNewTaskText,
  addTask,
  removeTask,
} = actions;

const defaultState = {
  text: '',
  tasks: [],
};

const taskText = handleActions(
  {
    [updateNewTaskText]: (state, { payload: text }) => text,
    [addTask]: () => '',
  },
  defaultState.text,
);

const tasks = handleActions(
  {
    [addTask]: (state, { payload: task }) => [task, ...state],
    [removeTask]: (state, { payload: id }) => state.filter((task) => task.id !== id),
  },
  defaultState.tasks,
);
// END

export default combineReducers({
  taskText,
  tasks,
});
