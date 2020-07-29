/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    const processedChildren = React.Children.map(children, (child) => {
      return (
        <li className='list-group-item'>{child}</li>
      );
    });

    return (
      <ul className='list-group'>
        {processedChildren}
      </ul>
    );
  }
}
// END
