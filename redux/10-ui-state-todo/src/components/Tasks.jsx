import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  // BEGIN (write your solution here)
  const {
    tasks: { byId, allIds },
    tasksUIState,
  } = state;

  const tasks = allIds.map((id) => byId[id]);

  return { tasks, tasksUIState };
  // END
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

class Tasks extends React.Component {
  // BEGIN (write your solution here)
  handleInverseTaskTheme = (task) => (e) => {
    e.preventDefault();
    const { inverseTaskTheme } = this.props;
    inverseTaskTheme({ task });
  };

  render() {
    const { tasksUIState } = this.props;
    console.log(tasksUIState);

    // TODO bg-light text-dark <=> bg-dark text-light
    const { tasks } = this.props;

    const commonClasses = `list-group-item d-flex`;
    const lightClasses = cn(commonClasses, {
      'bg-light': true,
      'text-dark': true,
    });
    const darkClasses = cn(commonClasses, {
      'bg-dark': true,
      'text-light': true,
    });

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={tasksUIState[task.id].theme === 'light' ? lightClasses : darkClasses}
            >
              <span className="mr-auto">
                <a
                  onClick={this.handleInverseTaskTheme(task)}
                  href="#"
                  className="text-reset"
                >
                  {task.text}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // END
}

export default connect(mapStateToProps, actionCreators)(Tasks);
