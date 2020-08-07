import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  static taskId = 0;

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
      tasks: response.data.reverse(),
    });
  }

  handleInputTask = ({ target: { value } }) => {
    this.setState({ currentTaskText: value });
  };

  handleSubmitTask = async (e) => {
    e.preventDefault();
    const { tasks, currentTaskText } = this.state;
    TodoBox.taskId +=1;
    const newTask = await axios.post(routes.taskPath(TodoBox.taskId), {
      text: currentTaskText,
    });
    console.log(newTask.data);
    this.setState({
      currentTaskText: '',
      tasks: [newTask.data, ...tasks],
    });
  };

  handleTaskState = (id) => async (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const task = tasks.find((task) => task.id === id);

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
    
    console.log(response.data);

    const index = tasks.findIndex((task) => task.id === id);
    const updatedTasks = update(tasks, { [index]: { ['state']: { $set: response.data.state}}});

    console.log('*** updatedTasks ***');
    console.log(updatedTasks);

    this.setState({
      tasks: updatedTasks,
    });
  }

  renderTasks() {
    const { tasks } = this.state;
    console.log(tasks);
    const activeTasks = tasks
      .filter(({ state }) => state === 'active')
      .map(({ id, text }) => <Item onClick={this.handleTaskState(id)} key={id} id={id} body={text} />);

    const finishedTasks = tasks
      .filter(({ state }) => state === 'finished')
      .map(({ id, text }) => <Item onClick={this.handleTaskState(id)} key={id} id={id} body={text} />);
    
    const activeTasksBlock = activeTasks.length > 0
      ? <div className="todo-active-tasks">{activeTasks}</div>
      : null;
    
    const finishedTasksBlock = finishedTasks.length > 0
      ? <div className="todo-finished-tasks">{finishedTasks}</div>
      : null;

    return (
      <React.Fragment>
        {activeTasksBlock}
        {finishedTasksBlock}
      </React.Fragment>
    );
  }

  render() {
    const { tasks, currentTaskText } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmitTask} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input onChange={this.handleInputTask} type="text" value={currentTaskText} required="required" className="form-control mr-3" placeholder="I am going..." />
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

