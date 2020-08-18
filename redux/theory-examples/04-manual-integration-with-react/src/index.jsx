import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

// Импортируем компонент
import Increment from './Increment.jsx';
// Импортируем редьюсеры
import reducers from './reducers.jsx';

const store = createStore(reducers);

// Создаём действие и оборачиваем его в функцию
const increment = (step = 1) => ({
  type: 'INCREMENT',
  payload: { step },
});

// Элемент для подключения React
const containerElement = document.getElementById('container');

// Подписываемся на изменения состояния внутри контейнера
// На каждое изменение отрисовываем наш компонент заново
store.subscribe(() => {
  const state = store.getState();
  ReactDOM.render(
    <Increment
      dispatch={store.dispatch}
      count={state}
      increment={increment}
    />,
    containerElement,
  );
});

ReactDOM.render(
  <Increment
    dispatch={store.dispatch}
    increment={increment}
  />,
  containerElement,
);
