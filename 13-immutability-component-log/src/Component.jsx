/* eslint-disable jsx-a11y/anchor-is-valid */

import _ from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      logs: [],
    };
  }

  removeLog = (id) => () => {
    const { logs } = this.state;
    const newLogs = logs.filter((log) => log.id !== id);

    this.setState({
      logs: newLogs,
    });
  };

  handleIncrease = () => this.addNewLog(1);

  handleDecrease = () => this.addNewLog(-1);

  addNewLog(value) {
    this.setState(({ currentValue, logs }) => {
      const id = _.uniqueId();
      const newValue = currentValue + value;
      const button = <button onClick={this.removeLog(id)} key={id} type="button" className="list-group-item list-group-item-action">{newValue}</button>;
      const newLog = {
        id,
        button,
      };

      return {
        currentValue: newValue,
        logs: [newLog, ...logs],
      };
    });
  }

  renderLogs() {
    const { logs } = this.state;
    if (logs.length === 0) {
      return null;
    }

    const buttons = logs.map(({ button }) => button);

    return (
      <div className="list-group">
        {buttons}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.handleIncrease} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleDecrease} type="button" className="btn hexlet-dec">-</button>
        </div>
        {this.renderLogs()}
      </div>
    );
  }
}
// END
