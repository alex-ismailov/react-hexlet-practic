import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import faker from '../faker.js';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

const actionCreators = {
  generateTasks: actions.generateTasks,
  cleanTasks: actions.cleanTasks,
};

class Panel extends React.Component {
  handleTasksGenerate = () => {

  };

  handleTasksClean = () => {
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

export default connect(mapStateToProps, actionCreators)(Panel);
// END
