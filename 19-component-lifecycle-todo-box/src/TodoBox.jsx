import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTaskText: '',
      tasks: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(routes.tasksPath());
    this.setState({
      tasks: response.data,
    });
  }

  handleInputTask = ({ target: { value } }) => {
    this.setState({ currentTaskText: value });
  };

  handleSubmitTask = async (e) => {
    e.preventDefault();
    const { tasks, currentTaskText } = this.state;
    const newTask = await axios.post(routes.tasksPath(), {
      text: currentTaskText,
    });
    this.setState({
      currentTaskText: '',
      tasks: [newTask.data, ...tasks],
    });
  };

  handleActiveTask = (id) => async (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    await axios.patch(routes.activateTaskPath(id));
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { state: { $set: 'active' } } });
    this.setState({
      tasks: updatedTasks,
    });
  };

  handleFinishTask = (id) => async (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    await axios.patch(routes.finishTaskPath(id));
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { state: { $set: 'finished' } } });
    this.setState({
      tasks: updatedTasks,
    });
  };

  renderActiveTasks(tasks) {
    const taskItems = tasks.map((task) => (
      <Item onClick={this.handleFinishTask(task.id)} key={task.id} task={task} />
    ));

    return <div className="todo-active-tasks">{taskItems}</div>;
  }

  renderFinishedTasks(tasks) {
    const taskItems = tasks.map((task) => (
      <Item onClick={this.handleActiveTask(task.id)} key={task.id} task={task} />
    ));

    return <div className="todo-finished-tasks">{taskItems}</div>;
  }

  renderForm() {
    const { currentTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitTask} className="todo-form form-inline mx-3">
        <div className="form-group">
          <input
            onChange={this.handleInputTask}
            type="text"
            value={currentTaskText}
            required
            className="form-control mr-3"
            placeholder="I am going..."
          />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => task.state === 'active');
    const finishedTasks = tasks.filter((task) => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}
// END
