/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/static-property-placement */

import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  static defaultProps = {
    opened: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    };
  }

  btnHandler = (e) => {
    e.preventDefault();
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  render() {
    const { opened } = this.state;
    const { text } = this.props;

    const collapseClass = cn({
      collapse: true,
      show: opened,
    });

    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={this.btnHandler}>Link with href</a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}
// END
