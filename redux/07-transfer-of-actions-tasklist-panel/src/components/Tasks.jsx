// BEGIN (write your solution here)
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  };
  return props;
};

class Tasks extends React.Component {
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
              <button type="button" className="close"><span>×</span></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Tasks);
// END
