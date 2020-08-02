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

  removeLog = (id) => (e) => {
    e.preventDefault();
    const { logs } = this.state;
    const newLogs = logs.filter((log) => log.id !== id);

    this.setState({
      logs: newLogs,
    });
  };

  addNewLog(value, logs) {
    const id = _.uniqueId();
    const button = <button onClick={this.removeLog(id)} key={id} type="button" className="list-group-item list-group-item-action">{value}</button>;
    
    const newLog = {
      id: id,
      button,
    };

    return {
      currentValue: value,
      logs: [ newLog, ...logs ],
    };
  }

  handleIncrease = () => {
    this.setState(({ currentValue, logs }) => {
      const newValue = currentValue + 1;
      return this.addNewLog(newValue, logs);
    });
  };

  handleDecrease = () => {
    this.setState(({ currentValue, logs }) => {
      const newValue = currentValue - 1;
      return this.addNewLog(newValue, logs);
    });
  };

  renderLogs() { // TODO переназвать, подобрать более подходящее имя
    const { logs } = this.state;
    const buttons = logs.map(({ button }) => button);

    return (
      <div className="list-group">
        {buttons}
      </div>
    );
  }

  render() {
    const { logs } = this.state;

    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.handleIncrease} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleDecrease} type="button" className="btn hexlet-dec">-</button>
        </div>
        {logs.length > 0 ? this.renderLogs() : null}
      </div>
    );
  }
}
// END
