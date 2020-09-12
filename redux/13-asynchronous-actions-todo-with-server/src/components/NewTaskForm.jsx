import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import * as actions from '../actions/index.js';

// const mapStateToProps = (state) => {
//   const props = {};
//   return props;
// };

const actionCreators = {
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  // BEGIN (write your solution here)
  
  // END

  render() {
    const {
      handleSubmit, submitting, pristine, error,
    } = this.props;
    // BEGIN (write your solution here)
    
    // END
  }
}

const ConnectedNewTaskForm = connect(null, actionCreators)(NewTaskForm);
export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
