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

  handleTaskState = (id) => async (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const task = tasks.find((t) => t.id === id);

    // если получать response при помощи тернарного оператора, то
    // в итоге мы получим Promise даже не смотря на await !!!!
    // const response = await task.state === 'active'
    //   ? axios.patch(routes.finishTaskPath(id))
    //   : axios.patch(routes.activateTaskPath(id));

    let response;
    if (task.state === 'active') {
      response = await axios.patch(routes.finishTaskPath(id));
    } else {
      response = await axios.patch(routes.activateTaskPath(id));
    }

    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { state: { $set: response.data.state } } });

    this.setState({
      tasks: updatedTasks,
    });
  }

  static taskId = 0;

  renderTasks() {
    const { tasks } = this.state;

    const activeTasks = tasks
      .filter(({ state }) => state === 'active')
      .map(({ id, text, state }) => (
        <Item onClick={this.handleTaskState(id)} key={id} id={id} body={text} state={state} />
      ));

    const finishedTasks = tasks
      .filter(({ state }) => state === 'finished')
      .map(({ id, text, state }) => (
        <Item onClick={this.handleTaskState(id)} key={id} id={id} body={text} state={state} />
      ));

    const activeTasksBlock = activeTasks.length > 0
      ? <div className="todo-active-tasks">{activeTasks}</div>
      : null;

    const finishedTasksBlock = finishedTasks.length > 0
      ? <div className="todo-finished-tasks">{finishedTasks}</div>
      : null;

    return (
      <>
        {activeTasksBlock}
        {finishedTasksBlock}
      </>
    );
  }

  render() {
    const { tasks, currentTaskText } = this.state;

    return (
      <div>
        <div className="mb-3">
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
        </div>
        {tasks.length > 0 && this.renderTasks()}
      </div>
    );
  }
}
// END
