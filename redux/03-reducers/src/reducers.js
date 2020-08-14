import _ from 'lodash';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_COMMENT_ADD': {
      const { id, taskId } = action.payload.comment;
      return { ...state, [id]: { id, taskId }};
    }
    case 'TASK_COMMENT_REMOVE': {
      return;
    }
    default:
      return state;
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_ADD': {
      const { id } = action.payload.task;
      return { ...state, [id]: { id } };
    }
    case 'TASK_REMOVE': {
      const { id } = action.payload;
      return _.omit(state.tasks, id);
    }
    default:
      return state;
  }
  // END
};


export default combineReducers({
  comments,
  tasks,
});

// const buildComment =
//  (id, task) => ({ id, taskId: task.id });