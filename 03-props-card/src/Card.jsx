/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { render } from 'react-dom';

// BEGIN (write your solution here)
export default class Card extends React.Component {
  static defaultProps = {
    title: 'default title',
    text: 'default text',
  };

  render() {
    const { title, text } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}

/* functional component with out default props*/
// export default (props) => {
//   const { title, text } = props;
//   return (
//     <div className="card">
//       <div className="card-body">
//         <h4 className="card-title">{title}</h4>
//         <p className="card-text">{text}</p>
//       </div>
//     </div>
//   );
// }

// END