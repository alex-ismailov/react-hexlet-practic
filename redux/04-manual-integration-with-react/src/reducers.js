import { combineReducers } from 'redux';

const text = (state = '', action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'UPDATE':
      const { text } = action.payload;
      return text;
    case 'RESET':
      return '';

    default:
      return state;
  }
  // END
};

export default combineReducers({
  text,
});
