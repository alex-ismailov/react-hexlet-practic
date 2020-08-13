import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    const items = [1, 2, 3, 4, 5].map((item) => ({ id: item }));
    this.state = { items };
  }

  removeItem = (id) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  renderItem = (item) => {
    const { id } = item;
    return (
      <li key={id}>
        <a href="/#" onClick={this.removeItem(id)}>{id}</a>
      </li>
    );
  };

  render() {
    return (
      <ul>
        {this.state.items.map(item => this.renderItem(item))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('root'),
);
