
import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_UPDATE': {
      return action.payload.text;
    }
    case 'TASK_ADD': {
      return '';
    }
    default:
      return state;
  }
};

// BEGIN (write your solution here)
const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD': {

      return;
    }
    case 'TASK_REMOVE': {

      return;
    }
    default:
      return state;
  }
};
// END

export default combineReducers({
  text,
  tasks,
});
