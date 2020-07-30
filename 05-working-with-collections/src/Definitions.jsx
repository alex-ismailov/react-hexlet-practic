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

    const tags = data.map(({ dt, dd }) => (
      <React.Fragment key={uniqueId()}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}
// END
