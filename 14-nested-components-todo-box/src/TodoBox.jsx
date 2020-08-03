import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      notes: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value, notes } = this.state;
    const id = uniqueId();
    const newNote = {
      id,
      value,
    };

    this.setState({
      value: '',
      notes: [newNote, ...notes],
    });
  };

  handleInput = (e) => {
    const { target: { value } } = e;
    this.setState({
      value,
    });
  };

  handleRemove = (id) => () => {
    const { notes } = this.state;
    
    this.setState({
      notes: notes.filter((note) => note.id !== id),
    });
  };

  renderNotes() {
    const { notes } = this.state;
    if (notes.length === 0) {
      return null;
    }

    return notes.map(({ id, value }) => <Item key={id} task={value} onRemove={this.handleRemove(id)} />);
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input onChange={this.handleInput} type="text" value={value} required="required" className="form-control mr-3" placeholder="I am going..." />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {this.renderNotes()}
      </div>
    );
  }
}
// END
