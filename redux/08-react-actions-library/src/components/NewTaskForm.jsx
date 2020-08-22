import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { taskText } = state;
  return { text: taskText };
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  // BEGIN (write your solution here)
  
  // END

  render() {
    const { text } = this.props;

    return (
      <form action="" className="form-inline" onSubmit={this.handleAddTask}>
        <div className="form-group mx-sm-3">
          <input
            type="text"
            data-testid="input"
            required
            value={text}
            onChange={this.handleUpdateNewTaskText}
          />
        </div>
        <input type="submit" data-testid="submit" className="btn btn-primary btn-sm" value="Add" />
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
