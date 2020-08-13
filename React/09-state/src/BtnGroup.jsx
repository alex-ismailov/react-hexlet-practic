import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }

  setActive(active) {
    this.setState({ active });
  }

  selectLeft = () => this.setActive('left');

  selectRight = () => this.setActive('right');

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true, 
      'btn-secondary': true,
    };

    const btnLeftClass = cn({
      ...sharedClasses,
      left: true,
      active: active === 'left',
    });

    const btnRightClass = cn({
      ...sharedClasses,
      right: true,
      active: active === 'right',
    });

    return (
      <div className="btn-group" role="group">
        <button type="button" className={btnLeftClass} onClick={this.selectLeft}>Left</button>
        <button type="button" className={btnRightClass} onClick={this.selectRight}>Right</button>
      </div>
    );
  }
}
// END
