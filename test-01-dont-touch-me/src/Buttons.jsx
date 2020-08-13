/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

// NOTE use web hooks with https://github.com/immerjs/use-immer

// BEGIN (write your solution here)
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtnIndex: false,
      btnCounts: [],
    };
  }

  handleButton = (index) => () => {
    this.setState({
      activeBtnIndex: index,
    });
  };

  renderButtons() {
    const { count } = this.props;
    const { btnCounts, activeBtnIndex } = this.state;
    const res = [];

    for (let i = 0; i < count; i += 1) {
      const btnClass = cn({
        btn: true,
        'm-1': true,
        'btn-primary': i !== activeBtnIndex,
        'btn-success': i === activeBtnIndex,
      });

      const btn = (
        <button onClick={this.handleButton(i)} key={i} className={btnClass} type="button">
          {btnCounts[i] ? btnCounts[i] : 0 }
        </button>
      );
      res.push(btn);
    }

    return res;
  }

  render() {
    return this.renderButtons();
  }
}
// END
