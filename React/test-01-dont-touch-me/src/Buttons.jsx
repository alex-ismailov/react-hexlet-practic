/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
// import { useImmer } from 'use-immer';
import cn from 'classnames';


// NOTE use web hooks with https://github.com/immerjs/use-immer

// BEGIN (write your solution here)
export default class Buttons extends React.Component {
  static defaultProps = {
    count: 3,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeBtnIndex: null,
      btnCounts: new Array(props.count).fill(0),
    };
  }

  handleButton = (index) => () => {
    this.setState(({ btnCounts }) => {
      const updatedBtnCounts = btnCounts.slice();
      updatedBtnCounts[index] += 1;

      return {
        activeBtnIndex: index,
        btnCounts: updatedBtnCounts,
      };
    });
  };

  render() {
    const { btnCounts, activeBtnIndex } = this.state;

    return btnCounts.map((btnCount, i) => {
      const btnClass = cn('btn m-1', {
        'btn-primary': i !== activeBtnIndex,
        'btn-success': i === activeBtnIndex,
      });

      return (
        <button onClick={this.handleButton(i)} key={`btn-${i}`} className={btnClass} type="button">
          {btnCount}
        </button>
      );
    });
  }
}
// END
