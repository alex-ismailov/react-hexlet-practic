import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [actions.removeTask](state, { payload: { id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  // BEGIN (write your solution here)
  [actions.toggleTaskState]: (state, { payload: { id } }) => {
    const newTaskState = state.byId[id].state === 'active'
      ? 'finished'
      : 'active';

    const newState = { ...state };
    _.set(newState, ['byId', id, 'state'], newTaskState);

    return newState;
  },
  // END
}, { byId: {}, allIds: [] });

const text = handleActions({
  [actions.addTask]() {
    return '';
  },
  [actions.updateNewTaskText](_state, { payload }) {
    return payload.text;
  },
}, '');

export default combineReducers({
  tasks,
  text,
});
