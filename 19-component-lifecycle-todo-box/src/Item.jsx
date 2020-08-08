/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
const Item = (props) => {
  const {
    id,
    body,
    onClick,
    state,
  } = props;

  const taskLink = state === 'active'
    ? <a onClick={onClick} href="#" className="todo-task">{body}</a>
    : <s><a onClick={onClick} href="#" className="todo-task">{body}</a></s>;

  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {taskLink}
      </div>
    </div>
  );
};

export default Item;
// END
