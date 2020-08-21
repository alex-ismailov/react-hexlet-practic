import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import faker from '../faker.js';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const actionCreators = {
  generateTasks: actions.generateTasks,
  cleanTasks: actions.cleanTasks,
};

class Panel extends React.Component {
  handleTasksGenerate = (e) => {
    e.preventDefault();
    const { generateTasks } = this.props;
    const makeNewTask = () => ({ id: _.uniqueId(), text: faker.lorem.sentence() });
    const tasks = _.times(5, makeNewTask).reverse();

    generateTasks(tasks);
  };

  handleTasksClean = (e) => {
    e.preventDefault();
    const { cleanTasks } = this.props;
    cleanTasks();
  };

  render() {
    return (
      <div className="py-3">
        <button onClick={this.handleTasksClean} type="button" data-test="clean" className="btn btn-warning btn-sm mr-3">Clean</button>
        <button onClick={this.handleTasksGenerate} type="button" data-test="generate" className="btn btn-primary btn-sm">Generate</button>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Panel);
// END
