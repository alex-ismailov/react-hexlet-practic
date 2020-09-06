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
  handleUpdateNewTaskText = (e) => {
    const { target: { value } } = e;
    const { updateNewTaskText } = this.props;
    updateNewTaskText({ text: value });
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const { addTask, text } = this.props;
    const task = { id: _.uniqueId(), text };
    addTask({ task });
  };
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


// почему в функции, к примеру, в removeTask({ id }) мы передаём объект, а не просто id как до этого?:
// https://ru.hexlet.io/topics/34433

// в чем преимущество написания редьюсера в такой форме(теория): [actions.addUser](state, { payload: { user } })....
// https://ru.hexlet.io/topics/35626
