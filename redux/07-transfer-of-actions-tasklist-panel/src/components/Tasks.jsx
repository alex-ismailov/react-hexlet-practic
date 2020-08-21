// BEGIN (write your solution here)
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
};

class Tasks extends React.Component {
  handleTaskRemove = (id) => () => {
    const { removeTask } = this.props;
    removeTask(id);
  };

  render() {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex">
              <span className="mr-auto">{task.text}</span>
              <button onClick={this.handleTaskRemove(task.id)} type="button" className="close"><span>×</span></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Tasks);
// END
