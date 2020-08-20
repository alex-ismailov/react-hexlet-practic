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

  handleInputText = (e) => {
    const { dispatch } = this.props;
    const { target: { value } } = e;
    dispatch(updateNewTaskText(value));
  };


  renderTasks() {
    const { tasks } = this.props;
    console.log(tasks);
    if(tasks.length === 0) {
      return null;
    }
    // TODO
    // return 'TODO tasks.map(....)';
    
    return tasks.map((task) => (
      <li className="list-group-item d-flex">
        <span className="mr-auto">{task}</span>
        <button type="button" className="close">
          <span>&times;</span>
        </button>
      </li>
    ));
  }

  render() {
    const { text } = this.props;
    console.log(text);

    return (
      <div className="col-5">
        <form action="" className="form-inline">
          <div className="form-group mx-sm-3">
            <input onChange={this.handleInputText} type="text" required value={text} />
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
