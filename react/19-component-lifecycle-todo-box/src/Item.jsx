/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
const Item = (props) => {
  const {
    task: { id },
    task: { text },
    task: { state },
    onClick,
  } = props;

  const link = <a onClick={onClick} href="#" className="todo-task">{text}</a>;

  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};

export default Item;
// END
