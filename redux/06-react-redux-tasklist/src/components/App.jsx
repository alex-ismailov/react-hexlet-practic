import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask, removeTask } from '../actions/index.js';

// BEGIN (write your solution here)

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
    tasks: state.tasks,
  }
  return props;
};

class App extends React.Component {

  handleInputTaskText = (e) => {
    const { dispatch } = this.props;
    const { target: { value } } = e;
    dispatch(updateNewTaskText(value));
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = this.props;
    const newTask = { id: _.uniqueId(), text };
    dispatch(addTask(newTask));
  };

  handleRemoveTask = (id) => () => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  };

  renderTasks() {
    const { tasks } = this.props;
    if(tasks.length === 0) {
      return null;
    }
    
    const taskItems = tasks.map((task) => (
      <li key={task.id} className="list-group-item d-flex">
        <span className="mr-auto">{task.text}</span>
        <button type="button" className="close">
          <span onClick={this.handleRemoveTask(task.id)}>&times;</span>
        </button>
      </li>
    ));

    return (
      <div class="mt-3">
        <ul class="list-group">{taskItems}</ul>
      </div>
    );
  }

  render() {
    const { text } = this.props;

    return (
      <div className="col-5">
        <form onSubmit={this.handleAddTask} action="" className="form-inline">
          <div className="form-group mx-sm-3">
            <input onChange={this.handleInputTaskText} type="text" required value={text} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Add</button>
        </form>
        {this.renderTasks()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)
// END
