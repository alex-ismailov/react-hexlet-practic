/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
export default (props) => {
  const { id, body, onClick} = props;
  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        <a onClick={onClick} href="#" className="todo-task">{body}</a>
      </div>
    </div>
  );
};
// END
