import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveLeftBtn: false,
      isActiveRightBtn: false,
    };
  }

  btnLeftHandler = () => {
    const { isActiveLeftBtn } = this.state;
    if (isActiveLeftBtn) {
      return;
    }

    this.setState({
      isActiveRightBtn: isActiveLeftBtn,
      isActiveLeftBtn: !isActiveLeftBtn,
    });
  };

  btnRightHandler = () => {
    const { isActiveRightBtn } = this.state;
    if (isActiveRightBtn) {
      return;
    }

    this.setState({
      isActiveLeftBtn: isActiveRightBtn,
      isActiveRightBtn: !isActiveRightBtn,
    });
  };

  render() {
    const { isActiveLeftBtn, isActiveRightBtn } = this.state;

    const btnLeftClass = cn({
      btn: true,
      'btn-secondary': true,
      left: true, 
      active: isActiveLeftBtn,
    });

    const btnRightClass = cn({
      btn: true,
      'btn-secondary': true,
      right: true,
      active: isActiveRightBtn,
    });

    return (
      <div className="btn-group" role="group">
        <button type="button" className={btnLeftClass} onClick={this.btnLeftHandler}>Left</button>
        <button type="button" className={btnRightClass} onClick={this.btnRightHandler}>Right</button>
      </div>
    );
  }
}
// END
