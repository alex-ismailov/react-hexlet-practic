/* eslint-disable jsx-a11y/anchor-is-valid */

import _ from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  removeLog = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);

    this.setState({
      items: newItems,
    });
  };

  handleIncrease = () => this.handleCount(1);

  handleDecrease = () => this.handleCount(-1);

  handleCount(value) {
    this.setState(({ items }) => {
      const newValue = _.get(items, [0, 'value'], 0) + value;
      const newItem = { id: _.uniqueId(), value: newValue };

      return {
        items: [newItem, ...items],
      };
    });
  }

  renderLogs() {
    const { items } = this.state;
    if (items.length === 0) {
      return null;
    }

    return (
      <div className="list-group">
        {items.map(({ id, value }) => (
          <button
            key={id}
            onClick={this.removeLog(id)}
            type="button"
            className="list-group-item list-group-item-action"
          >
            {value}
          </button>
        ))}
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
