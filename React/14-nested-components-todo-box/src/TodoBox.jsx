import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      tasks: [],
    };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;
    const newTask = {
      id: uniqueId(),
      taskText: newTaskText,
    };

    this.setState({
      newTaskText: '',
      tasks: [newTask, ...tasks],
    });
  };

  handleInputTask = (e) => {
    const { target: { value } } = e;
    this.setState({
      newTaskText: value,
    });
  };

  handleRemoveTask = (id) => () => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== id),
    });
  };

  renderTasks() {
    const { tasks } = this.state;
    if (tasks.length === 0) {
      return null;
    }

    return tasks.map(({ id, taskText }) => (
      <Item key={id} task={taskText} onRemove={this.handleRemoveTask(id)} />
    ));
  }

  renderForm() {
    const { newTaskText } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm} className="todo-form form-inline mx-3">
        <div className="form-group">
          <input onChange={this.handleInputTask} type="text" value={newTaskText} required className="form-control mr-3" placeholder="I am going..." />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {this.renderTasks()}
      </div>
    );
  }
}
// END
