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
  handleSubmit = async (values) => {
    const { addTask, reset } = this.props;
    try {
      await addTask({ task: values });
    } catch (error) {
      throw new SubmissionError({ _error: error.message });
    }
    reset();
  }
  // END

  render() {
    const {
      handleSubmit, submitting, pristine, error,
    } = this.props;

    // BEGIN (write your solution here)
    

    return (
      <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-3">
          <Field name="text" required disabled={submitting} component="input" type="text" />
        </div>
        <input type="submit" disabled={pristine || submitting} className="btn btn-primary btn-sm" value="Add" />
        {error && <div className="ml-3">{error}</div>}
      </form>
    );
    // END
  }
}

const ConnectedNewTaskForm = connect(null, actionCreators)(NewTaskForm);
export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
