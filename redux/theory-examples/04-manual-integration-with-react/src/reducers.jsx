export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload.step;
    default:
      return state;
  }
};
