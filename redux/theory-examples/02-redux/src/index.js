import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('callback 1');
});
store.subscribe(() => {
  console.log('callback 2');
});
store.subscribe(() => {
  console.log('callback 3');
});
store.subscribe(() => console.log(`state: ${store.getState()}`));
store.subscribe(() => console.log('================\n'));

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

store.dispatch(increment()); // => 2
store.dispatch(decrement()); // => 1
