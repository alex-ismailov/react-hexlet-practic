/* eslint-disable react/display-name */
import React from 'react';

// BEGIN (write your solution here)
export default (dataObj) => {
  const { title, text } = dataObj;
  if (!title && !text) {
    return null;
  }

  // return (
  //   <div className="card">
  //     <div className="card-body">
  //       {title ? <h4 className="card-title">{title}</h4> : null}
  //       {text ? <p className="card-text">{text}</p> : null}
  //     </div>
  //   </div>
  // );
  const titleDom = title && <h4 className="card-title">{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;
  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
};
// END
