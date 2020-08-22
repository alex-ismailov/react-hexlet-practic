import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const {
  updateNewTaskText,
  addTask,
} = actions;

const defaultState = {
  text: '',
  tasks: [],
};
const taskText = handleActions(
  {
    [updateNewTaskText]: (state, { payload: text }) => {
      return text;
    },
    [addTask]: () => {
      return '';
    }
  },
  defaultState.text,
);
const tasks = handleActions(
  {
    [addTask]: (state, { payload: task }) => {
      return [ task, ...state ];
    }
  },
  defaultState.tasks,
);
// END

export default combineReducers({
  taskText,
  tasks,
});
