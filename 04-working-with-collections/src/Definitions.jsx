/* eslint-disable react/prefer-stateless-function */
import { uniqueId } from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;

    if (data.length === 0) {
      return null;
    }

    const definitions = data.reduce((acc, def) => {
      const { dt, dd } = def;
      acc.push(<dt key={uniqueId()}>{dt}</dt>);
      acc.push(<dd key={uniqueId()}>{dd}</dd>);
      return acc;
    }, []);

    return (
      <dl>
        {definitions}
      </dl>
    );
  }
}
// END
