import React from 'react';

export default class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = (e) => {
    alert('Отправленное эссе: ' + this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>EssayForm</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Сочинение:
            <textarea value={this.state.value} onChange={this.handleChange} rows="10" cols="45"/>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
