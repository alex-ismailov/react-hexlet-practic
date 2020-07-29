import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div
        className='d-flex justify-content-center align-items-center mt-5'
      >
        <div
          className='d-flex justify-content-center align-items-center rounded-circle shadow-lg'
          style={{
            width: `${30}vh`,
            height: `${30}vh`,
          }}
        >
          <h2 className='text-center'>{this.state.date.toLocaleTimeString('ru', { hour12: false })}</h2>
        </div>
      </div>
    );
  }
}
